import { createContext } from "react";

const {
  Provider: BookstoreApiProvider,
  Consumer: BookstoreApiConsumer,
} = createContext();

export { BookstoreApiProvider, BookstoreApiConsumer };