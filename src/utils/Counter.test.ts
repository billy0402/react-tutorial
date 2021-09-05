import 'regenerator-runtime';
import 'core-js/stable';
import { expect, test } from '@jest/globals';

import Counter from './Counter';
import { addTwoNumbers } from './math';

jest.mock('./math');

test('The default value of count of the counter will be 0', () => {
  // Arrange: 準備階段
  const counter = new Counter();
  const expected = 0;

  // Assert: 驗證階段
  expect(counter.count).toBe(expected);
});

test('The count will be from 0 become 1 if I first executed increment method', () => {
  // Arrange: 準備階段
  addTwoNumbers.mockReturnValue(1);
  console.log(addTwoNumbers.mock.calls);
  const counter = new Counter();
  const expected = 1;

  // Act: 執行階段
  counter.increment();

  // Assert: 驗證階段
  expect(counter.count).toBe(expected);
});

test('The count will become value of response after executed setCountFromDatabase', async () => {
  // Arrange: 準備階段
  global.fetch = jest.fn().mockReturnValue({ json: () => ({ count: 5 }) });
  const counter = new Counter();
  const expected = 5;

  // Act: 執行階段
  await counter.setCountFromDatabase();

  // Assert: 驗證階段
  expect(counter.count).toBe(expected);

  delete global.fetch;
});
