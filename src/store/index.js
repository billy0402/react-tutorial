import { createStore } from 'redux';

import news from '../reducers/news';

const store = createStore(news);

export default store;
