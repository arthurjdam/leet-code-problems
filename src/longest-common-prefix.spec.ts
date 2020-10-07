import { expect, test } from '@jest/globals';
import longestCommonPrefix from './longest-common-prefix';

test('Input examples', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
});
