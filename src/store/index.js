import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import news from '../reducers/news';
import user from '../reducers/user';

// const logger = (store) => (next) => (action) => {
//   console.log('此次執行: ', action);
//   console.log('執行之前的 state: ', store.getState());

//   const result = next(action);

//   console.log('執行之後的 state: ', store.getState());
//   return result;
// };

// const logger2 = (store) => (next) => (action) => {
//   const result = next(action);
//   console.log(result);
// };

const store = createStore(
  combineReducers({ news, user }),
  applyMiddleware(thunk, logger),
);

export default store;
