import { expect, test } from '@jest/globals';
import letterCombinations from './letter-combinations-of-a-phone-number';

test('Basic examples', () => {
  expect(letterCombinations('23')).toBe(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});
