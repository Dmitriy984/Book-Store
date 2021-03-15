import React from "react";
import { BookstoreApiConsumer } from "../../api/bookstoreApiContext";

export default function withBookstoreApi() {
  return (Wrapped) => {
    return (props) => {
      return (
        <BookstoreApiConsumer>
          {(bookstoreApi) => {
            return <Wrapped {...props} bookstoreApi={bookstoreApi} />;
          }}
        </BookstoreApiConsumer>
      );
    };
  };
}
