import {expect, test} from '@jest/globals';
import isValid from './valid-parentheses';

test('Input examples', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('{[]}')).toBe(true);
    expect(isValid('{{}[][[[]]]}')).toBe(true);
});