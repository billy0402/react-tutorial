import React from 'react';
import { combineReducers, createStore } from 'redux';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveTextContent,
} from '@testing-library/jest-dom/matchers';

import News from './News';

import news from '../../reducers/news';
import user from '../../reducers/user';
import expectExport from 'expect';

expect.extend({ toBeInTheDocument, toHaveTextContent });

test('The page will change to news information when I clicked the news item', () => {
  // Arrange: 準備階段
  const store = createStore(combineReducers({ news, user }));
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/news']}>
        <News />
      </MemoryRouter>
    </Provider>,
  );

  // Act: 執行階段
  fireEvent.click(getByText('第一筆最新消息'));

  // Assert: 驗證階段
  expect(getByText('您正在閱讀 第一筆最新消息')).toBeInTheDocument();
  expect(getByText('這裡是第一筆哦！')).toBeInTheDocument();
});

test('The News list will add a new news if I use NewsForm create', () => {
  // Arrange: 準備階段
  const store = createStore(combineReducers({ news, user }));
  const { getByText, getByPlaceholderText, getAllByRole } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/news']}>
        <News />
      </MemoryRouter>
    </Provider>,
  );

  // Act: 執行階段
  fireEvent.change(getByPlaceholderText('請輸入名稱'), {
    target: { value: '測試名稱' },
  });
  fireEvent.change(getByPlaceholderText('請輸入敘述'), {
    target: { value: '測試敘述' },
  });
  fireEvent.click(getByText('新增最新消息'));

  // Assert: 驗證階段
  const newsList = getAllByRole('link');
  expectExport(newsList.length).toBe(4);
  expectExport(newsList[3]).toHaveTextContent('測試名稱');
});

test("The News item will remove from list if I click it's delete button", () => {
  // Arrange: 準備階段
  const store = createStore(combineReducers({ news, user }));
  const { queryByText, getAllByText, getAllByRole } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/news']}>
        <News />
      </MemoryRouter>
    </Provider>,
  );

  // Act: 執行階段
  const deleteNewsButtons = getAllByText('刪除');
  fireEvent.click(deleteNewsButtons[0]);

  // Assert: 驗證階段
  const newsList = getAllByRole('link');
  expectExport(newsList.length).toBe(2);
  expectExport(queryByText('第一筆最新消息')).not.toBeInTheDocument();
});
