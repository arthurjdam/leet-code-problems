import { expect, test } from '@jest/globals';
import threeSumClosest from './3sum-closest';

test('Input examples', () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
});
