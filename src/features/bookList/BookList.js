import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withBookstoreApi from "../../common/hoc/withBookstoreApi";
import compose from "../../common/utils/compose";
import BookListItem from "./BookListItem";
import { bookAddedToCart } from "../shoppingCartTable/shoppingCartSlice";
import { fetchBooks } from "./booListSlice";
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
              onAddedToCart={() => onAddedToCart(book)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
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

const mapDispatchToProps = (dispatch, { bookstoreApi }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreApi),
      onAddedToCart: bookAddedToCart,
    },
    dispatch
  );
};

export default compose(
  withBookstoreApi(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
