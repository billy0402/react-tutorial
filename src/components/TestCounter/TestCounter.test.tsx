import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

import TestCounter from './TestCounter';

expect.extend({ toBeInTheDocument });

test('The default text display in view will be 目前數字: 0', () => {
  // Arrange: 準備階段
  const { getByText } = render(<TestCounter />);

  // Assert: 驗證階段
  expect(getByText('目前數字: 0')).toBeInTheDocument();
});
test('The text of count display in view will from 0 change to 1 after I clicked 點我加一 button', () => {
  // Arrange: 準備階段
  const { getByText, queryByText } = render(<TestCounter />);

  // Act: 執行階段
  fireEvent.click(getByText('點我加一'));

  // Assert: 驗證階段
  expect(queryByText('目前數字: 0')).not.toBeInTheDocument();
  expect(getByText('目前數字: 1')).toBeInTheDocument();
});
