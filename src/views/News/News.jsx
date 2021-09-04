import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import NewsList from './NewsList.jsx';
import NewsReader from './NewsReader.jsx';

import style from './index.scss';

const News = () => {
  const [news] = useState([
    { id: 1, name: '第一筆最新消息', description: '這是第一筆哦！' },
    { id: 2, name: '第二筆最新消息', description: '這是第二筆哦！' },
    { id: 3, name: '第三筆最新消息', description: '這是第三筆哦！' },
  ]);

  return (
    <Switch>
      <Route
        exact
        path='/news'
        component={() => (
          <>
            <h1>這裡是最新消息</h1>
            <NewsList news={news} />
          </>
        )}
      />
      <Route path='/news/:id' component={() => <NewsReader news={news} />} />
    </Switch>
  );
};

export default News;
