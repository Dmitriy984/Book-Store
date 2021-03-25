import React from "react";
import { connect } from "react-redux";
import styles from "./ShoppingCartTable.module.css";

function ShoppingCartTable({ items, total, onDelete, onIncrease, onDiminish }) {
  const renderRow = (item, idx) => {
    const {
      isbn,
      title,
      count,
      total: { value },
    } = item;
    return (
      <tr key={isbn}>
        <th scope="row">{idx + 1}</th>
        <td>{title}</td>
        <td>{count}</td>
        <td>&euro; {value}</td>
        <td>
          <button
            onClick={() => onDelete(isbn)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(isbn)}
            className="btn btn-outline-success btn-sm"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDiminish(isbn)}
            className="btn btn-outline-warning btn-sm"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className={`${styles.shoppingCartTable} table-responsive-sm`}>
      <h2>Your Order</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name of the book</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className={styles.total}>Total: &euro; {total}</div>
    </div>
  );
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onDelete: (isbn) => {
      console.log(`Delete ${isbn}`);
    },
    onIncrease: (isbn) => {
      console.log(`Increase ${isbn}`);
    },
    onDiminish: (isbn) => {
      console.log(`Diminish ${isbn}`);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
