import { combineReducers } from 'redux';
import bookListReducer from '../features/bookList/booListSlice';
import shoppingCartReducer from '../features/shoppingCartTable/shoppingCartSlice';

const rootReducer = combineReducers({
  bookList: bookListReducer,
  shoppingCart: shoppingCartReducer
});

export default rootReducer;