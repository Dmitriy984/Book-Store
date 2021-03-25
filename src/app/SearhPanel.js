import React from "react";
import styles from "./SearchPanel.module.css";

export default function SearchPanel() {
  return (
    <div className={`input-group input-group-sm ${styles.searchPanel}`}>
      <input
        type="text"
        className="form-control"
        placeholder="Bookstore search"
        aria-label="Bookstore search"
        aria-describedby="buttonAddon"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="buttonAddon"
        >
          Search
        </button>
      </div>
    </div>
  );
}
