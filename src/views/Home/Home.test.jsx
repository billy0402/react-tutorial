import 'regenerator-runtime';
import 'core-js/stable';
import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, waitFor } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

import Home from './Home';

import user from '../../reducers/user';

expect.extend({ toBeInTheDocument });

test('The view will display user information from api after Home rendered', async () => {
  // Arrange: 準備階段
  global.fetch = jest
    .fn()
    .mockResolvedValue({ json: () => ({ user: '神Q超人' }) });
  const store = createStore(combineReducers({ user }), applyMiddleware(thunk));
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  // Assert: 驗證階段
  await waitFor(() => {
    expect(getByText(/神Q超人/)).toBeInTheDocument();
  });
});
