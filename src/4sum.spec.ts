import { expect, test } from '@jest/globals';
import fourSum from './4sum';

test('Input examples', () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0).sort()).toEqual(
    [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ].sort(),
  );
  expect(fourSum([], 0)).toEqual([]);
  expect(fourSum([0], 0)).toEqual([]);
});
