import {expect, test} from '@jest/globals';
import shiftingLetters from './shifting-letters';

test('Input examples', () => {
    expect(shiftingLetters('abc', [3,5,9])).toBe('rpl');
});