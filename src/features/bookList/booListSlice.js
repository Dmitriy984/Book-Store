import { createSlice } from "@reduxjs/toolkit";

export const bookListSlice = createSlice({
  name: "bookList",
  initialState: {
    books: [],
    loading: true,
    error: null,
  },
  reducers: {
    booksRequested: (state) => {
      state.loading = true;
    },
    booksLoaded: (state, action) => {
      state.books = action.payload;
      state.loading = false;
    },
    booksError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  booksRequested,
  booksLoaded,
  booksError,
} = bookListSlice.actions;

export const fetchBooks = (bookstoreApi) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreApi
    .getAllBooks()
    .then((data) => dispatch(booksLoaded(data.books)))
    .catch((err) => dispatch(booksError(err.toString())));
};

export const selectBookByISBN = (state, bookISBN) => {
  return state.books.find((book) => book.ISBN === bookISBN);
};

export default bookListSlice.reducer;
