import { expect, test } from '@jest/globals';
import isMatch from './regular-expression-matching';

test('Input examples', () => {
  expect(isMatch('aa', 'a')).toBe(false);
  expect(isMatch('aa', 'a*')).toBe(true);
  expect(isMatch('ab', '.*')).toBe(true);
  expect(isMatch('aab', 'c*a*b')).toBe(true);
  expect(isMatch('aab', 'c*a**b')).toBe(false);
  expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false);
});
