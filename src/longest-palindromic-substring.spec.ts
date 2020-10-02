import { expect, test } from '@jest/globals';
import longestPalindrome from './longest-palindromic-substring';

test('Input examples', () => {
    expect(longestPalindrome('babad')).toBe('bab')
    expect(longestPalindrome('cbbd')).toBe('bb')
    expect(longestPalindrome('a')).toBe('a')
    expect(longestPalindrome('ac')).toBe('a')
    expect(longestPalindrome('aca')).toBe('aca')
});