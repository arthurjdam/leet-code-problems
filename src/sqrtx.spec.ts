import { expect, test } from '@jest/globals';
import mySqrt from './sqrtx';

test('Input examples', () => {
  for (let i = 0; i < 1000; ++i) {
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(8)).toBe(2);
  }
});
