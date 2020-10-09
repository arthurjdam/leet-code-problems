import { expect, test } from '@jest/globals';
import threeSumClosest from './3sum-closest';

test('Input examples', () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
  expect(threeSumClosest([-4, -1, 2, 1], 1)).toBe(2);
  expect(threeSumClosest([-100, -98, -2, -1], -101)).toBe(-101);
});
