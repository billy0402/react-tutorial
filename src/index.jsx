import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';

ReactDOM.render(
  <HashRouter>
    <Menu />
    <Switch>
      <Route path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Route
        sensitive
        path='/home'
        component={() => {
          <h1>我來亂的</h1>;
        }}
      />
      <Route path='/' component={NotFound} />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
