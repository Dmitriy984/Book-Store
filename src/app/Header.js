import React from 'react';
import { Link } from 'react-router-dom';
import styles from'./Header.module.css';
import SearchPanel from './SearhPanel';


export default function Header({ numItems, total }) {
  return (
    <header
      className={`${styles.shopHeader} d-sm-flex flex-sm-row justify-content-between align-items-center`}
    >
      <Link to="/" className={`${styles.logo} text-dark`} href="#">
        Book Store
      </Link>
      <SearchPanel />
      <Link to="/cart" className={styles.shoppingCart}>
        <i className={`${styles.cartIcon} fa fa-shopping-cart`} />
        {numItems} items (${total})
      </Link>
    </header>
  );
}