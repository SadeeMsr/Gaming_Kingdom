import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import AuthReducer from '../Reducer/AuthReducer';
import CartReducer from '../Reducer/CartReducer';

const combinedReducer = combineReducers({
  books: CartReducer,
  Auth: AuthReducer,
  // user: userReducer,
});

export const store = createStore(combinedReducer, composeWithDevTools());
