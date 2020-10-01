import { expect, test } from '@jest/globals';
import shiftingLetters from './shifting-letters';

test('Input examples', () => {
  expect(shiftingLetters('a', [3])).toBe('d');
  expect(shiftingLetters('abc', [3, 5, 9])).toBe('rpl');
  expect(shiftingLetters('bad', [10, 20, 30])).toBe('jyh');
});
