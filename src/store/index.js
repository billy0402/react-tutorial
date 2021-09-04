import { combineReducers, createStore } from 'redux';

import news from '../reducers/news';
import user from '../reducers/user';

const store = createStore(combineReducers({ news, user }));

export default store;
