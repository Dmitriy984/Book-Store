import React from "react";
import styles from "./BookListItem.module.css";

export default function BookListItem({ book, onAddedToCart }) {
  const {
    title,
    author,
    image,
    price: { displayValue },
  } = book;
  return (
    <div className={`${styles.bookListItem} d-sm-flex flex-sm-column`}>
      <div className={styles.bookCover}>
        <img className="img-fluid" src={image} alt="cover" />
      </div>
      <div className={styles.bookDetails}>
        <p className={styles.bookTitle}>{title}</p>
        <p className={styles.bookAuthor}>{author}</p>
        <p className={styles.bookPrice}>${displayValue}</p>
        <button
          onClick={onAddedToCart}
          className={`btn btn-info ${styles.addToCard}`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
