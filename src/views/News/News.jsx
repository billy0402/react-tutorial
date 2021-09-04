import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NewsList from './NewsList.jsx';
import NewsReader from './NewsReader.jsx';
import NewsForm from './NewsForm.jsx';

import style from './index.scss';

const News = () => (
  <Switch>
    <Route
      exact
      path='/news'
      component={() => (
        <>
          <h1>這裡是最新消息</h1>
          <NewsForm />
          <NewsList />
        </>
      )}
    />
    <Route path='/news/:id' component={NewsReader} />
  </Switch>
);

export default News;
