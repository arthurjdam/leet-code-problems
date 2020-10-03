import { expect, test } from '@jest/globals';
import countSubstrings from './palindromic-substrings';

test('Input examples', () => {
    expect(countSubstrings('abc')).toBe(3);
    expect(countSubstrings('aaa')).toBe(6);
});