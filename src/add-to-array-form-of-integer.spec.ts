import { expect, test } from '@jest/globals';
import addToArrayForm from './add-to-array-form-of-integer';

test('Input xamples', () => {
  expect(addToArrayForm([1, 2, 0, 0], 34)).toStrictEqual([1, 2, 3, 4]);
  expect(addToArrayForm([2, 7, 4], 181)).toStrictEqual([4, 5, 5]);
  expect(addToArrayForm([2, 1, 5], 806)).toStrictEqual([1, 0, 2, 1]);
  expect(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1)).toStrictEqual([
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  expect(
    addToArrayForm(
      [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
      516,
    ),
  ).toStrictEqual([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 5, 7, 9]);
});
