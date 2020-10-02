import { expect, test } from '@jest/globals';
import lengthOfLongestSubstring from './longest-substring-without-repeating-characters';

test('Input examples', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  expect(lengthOfLongestSubstring('')).toBe(0);
  expect(lengthOfLongestSubstring('abcdefg')).toBe(7);
});
