import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CartReducer from '../Reducer/CartReducer';

const combinedReducer = combineReducers({
  books: CartReducer,
  // user: userReducer,
});

export const store = createStore(combinedReducer, composeWithDevTools());
