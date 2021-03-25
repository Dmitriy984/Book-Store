import { combineReducers } from 'redux';
import bookListReducer from '../features/bookList/booListSlice';
import shoppingCartReducer from '../features/shoppingCartTable/shoppingCartSlice';

const rootReducer = combineReducers({
  bookListReducer,
  shoppingCartReducer
});

export default rootReducer;