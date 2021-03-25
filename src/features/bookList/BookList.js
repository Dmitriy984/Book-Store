import React, { Component } from "react";
import { connect } from "react-redux";
import withBookstoreApi from "../../common/hoc/withBookstoreApi";
import compose from "../../common/utils/compose";
import BookListItem from "./BookListItem";
import { booksLoaded, booksRequested, booksError } from "./booListSlice";
import { bookAddedToCart } from "../shoppingCartTable/shoppingCartSlice";
import Spinner from "../../common/genericComponents/Spinner";
import ErrorIndicator from "../../common/genericComponents/ErrorIndicator";
import styles from "./BookList.module.css";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className={`${styles.bookList} row`}>
      {books.map((book) => {
        return (
          <li className="col-sm-4" key={book.ISBN}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.ISBN)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    const {
      bookstoreApi,
      booksLoaded,
      booksRequested,
      booksError,
    } = this.props;

    booksRequested();
    bookstoreApi
      .getAllBooks()
      .then((data) => booksLoaded(data.books))
      .catch((err) => booksError(err.toString()));
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (books) => dispatch(booksLoaded(books)),
    booksRequested: () => dispatch(booksRequested()),
    booksError: () => dispatch(booksError()),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreApi(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
