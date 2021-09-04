import { expect, test } from '@jest/globals';

import { addTwoNumbers } from './math';

test('The result of addTwoNumbers will be 5 if use 3 and 2', () => {
  // Arrange: 準備階段
  const expected = 5;

  // Act: 執行階段
  const result = addTwoNumbers(3, 2);

  // Assert: 驗證階段
  expect(result).toBe(expected);
});
