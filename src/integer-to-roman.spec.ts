import {expect, test} from '@jest/globals';
import intToRoman from './integer-to-roman';

test('Basic numbers', () => {
  expect(intToRoman(1)).toBe('I');
  expect(intToRoman(2)).toBe('II');
  expect(intToRoman(3)).toBe('III');
  expect(intToRoman(5)).toBe('V');
  expect(intToRoman(10)).toBe('X');
});

test('Addition', () => {
  expect(intToRoman(11)).toBe('XI');
  expect(intToRoman(16)).toBe('XVI');
  expect(intToRoman(58)).toBe('LVIII');
});

test('Subtraction', () => {
  expect(intToRoman(9)).toBe('IX');
  expect(intToRoman(1994)).toBe('MCMXCIV');
});