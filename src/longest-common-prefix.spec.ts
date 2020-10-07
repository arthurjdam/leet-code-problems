import { expect, test } from '@jest/globals';
import longestCommonPrefix from './longest-common-prefix';

test('Input examples', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  expect(longestCommonPrefix([])).toBe('');
  expect(longestCommonPrefix(['a'])).toBe('a');
  expect(longestCommonPrefix(['a', 'ab'])).toBe('a');
  expect(longestCommonPrefix(['ab', 'a'])).toBe('a');
});
