import {expect, test} from '@jest/globals';
import romanToInt from './roman-to-integer';

test('Basic numbers', () => {
  expect(romanToInt('I')).toBe(1);
  expect(romanToInt('II')).toBe(2);
  expect(romanToInt('III')).toBe(3);
  expect(romanToInt('V')).toBe(5);
  expect(romanToInt('X')).toBe(10);
});

test('Addition', () => {
  expect(romanToInt('XI')).toBe(11);
  expect(romanToInt('XVI')).toBe(16);
  expect(romanToInt('LVIII')).toBe(58);
});

test('Subtraction', () => {
  expect(romanToInt('IX')).toBe(9);
  expect(romanToInt('MCMXCIV')).toBe(1994);
});