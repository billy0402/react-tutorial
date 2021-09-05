import { renderHook, act } from '@testing-library/react-hooks';

import useCounter from './useCounter';

test('The default count will be the received parameter', () => {
  // Arrange: 準備階段
  const { result } = renderHook(() => useCounter(8, () => {}));
  const expected = 8;

  // Assert: 驗證階段
  expect(result.current.count).toBe(expected);
});

test('The count will be 24 after the add executed', () => {
  // Arrange: 準備階段
  const { result } = renderHook(() => useCounter(8, () => {}));
  const expected = 24;

  // Act: 執行階段
  act(() => {
    result.current.add(16);
  });

  // Assert: 驗證階段
  expect(result.current.count).toBe(expected);
});

test('The callback function will executed after the add executed', () => {
  // Arrange: 準備階段
  const mockCallback = jest.fn();
  const { result } = renderHook(() => useCounter(8, mockCallback));

  // Act: 執行階段
  act(() => {
    result.current.add(16);
  });

  // Assert: 驗證階段
  expect(mockCallback.mock.calls.length).toBe(2);
});
