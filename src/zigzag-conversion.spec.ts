import {expect, test} from '@jest/globals';
import convert from './zigzag-conversion';

test('Input examples', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
});