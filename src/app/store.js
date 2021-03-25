import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "../features/bookList/booListSlice";
import shoppingCartReducer from "../features/shoppingCartTable/shoppingCartSlice";

export default configureStore({
  reducer: {
    bookList: bookListReducer,
    shoppingCart: shoppingCartReducer,
  },
});
