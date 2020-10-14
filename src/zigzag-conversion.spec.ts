import { expect, test } from '@jest/globals';
import convert from './zigzag-conversion';

test('Input examples', () => {
  expect(convert('A', 1)).toBe('A');
  expect(convert('A', 3)).toBe('A');
  expect(convert('ABC', 2)).toBe('ACB');
  expect(convert('ABC', 1)).toBe('ABC');
  expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
});
