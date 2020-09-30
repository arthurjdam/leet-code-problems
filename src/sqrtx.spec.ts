import {expect, test} from '@jest/globals';
import mySqrt from './sqrtx';

test('Input examples', () => {
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(8)).toBe(2);
});