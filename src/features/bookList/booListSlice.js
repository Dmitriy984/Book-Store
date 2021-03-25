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
      // state.books = [];
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

export default bookListSlice.reducer;
