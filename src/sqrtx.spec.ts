import { expect, test } from '@jest/globals';
import mySqrt, { mySqrt2, mySqrt3 } from './sqrtx';

test('Input examples', () => {
  console.time('a');
  for (let i = 0; i < 1000; ++i) {
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(8)).toBe(2);
  }
  console.timeEnd('a');
});

test('Input examples2', () => {
  console.time('b');
  for (let i = 0; i < 1000; ++i) {
    expect(mySqrt2(4)).toBe(2);
    expect(mySqrt2(8)).toBe(2);
  }
  console.timeEnd('b');
});

test('Input examples3', () => {
  console.time('c');
  for (let i = 0; i < 1000; ++i) {
    expect(mySqrt3(4)).toBe(2);
    expect(mySqrt3(8)).toBe(2);
  }
  console.timeEnd('c');
});
