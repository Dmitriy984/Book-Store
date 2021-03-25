import { createSlice } from "@reduxjs/toolkit";

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems(idx + 1)];
};

const updateCarItem = (book, item = {}, quantity) => {
  const { isbn = book.ISBN, count = 0, title = book.title, total = 0 } = item;

  return {
    isbn,
    title,
    count: count + quantity,
    total: total + quantity * book.price.value,
  };
};

const updateOrder = (state, bookISBN, quantity) => {
  const book = state.books.find(({ ISBN }) => ISBN === bookISBN);
  const itemIndex = state.cartItems.findIndex(({ ISBN }) => ISBN === bookISBN);
  const item = state.cartItems[itemIndex];
  const newItem = updateCarItem(book, item, quantity);

  return {
    cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
    orderTotal: 0,
  };
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    cartItems: [],
    orderTotal: 0,
  },
  reducers: {
    bookAddedToCart: (state, action) => {
      return updateOrder(state, action.payload, 1);
    },
    bookRemovedFromCart: (state, action) => {
      return updateOrder(state, action.payload, -1);
    },
    allBooksRemovedFromCart: (state, action) => {
      const item = state.shoppingCart.cartItems.find(
        ({ ISBN }) => ISBN === action.payload
      );
      return updateOrder(state, action.payload, -item.count);
    },
  },
});

export const {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
