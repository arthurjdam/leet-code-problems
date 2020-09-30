import { expect, test } from '@jest/globals';
import numberToWords from './integer-to-english-words';

test('Integer to English Words', () => {
  expect(numberToWords(0)).toBe('Zero');
  expect(numberToWords(1)).toBe('One');
  expect(numberToWords(4)).toBe('Four');
  expect(numberToWords(10)).toBe('Ten');
  expect(numberToWords(12)).toBe('Twelve');
  expect(numberToWords(24)).toBe('Twenty Four');
  expect(numberToWords(123)).toBe('One Hundred Twenty Three');
  expect(numberToWords(100)).toBe('One Hundred');
  expect(numberToWords(101)).toBe('One Hundred One');
  expect(numberToWords(411)).toBe('Four Hundred Eleven');
  expect(numberToWords(1000)).toBe('One Thousand');
  expect(numberToWords(20000)).toBe('Twenty Thousand');
  expect(numberToWords(12345)).toBe('Twelve Thousand Three Hundred Forty Five');
  expect(numberToWords(200000)).toBe('Two Hundred Thousand');
  expect(numberToWords(200400)).toBe('Two Hundred Thousand Four Hundred');
  expect(numberToWords(1000000)).toBe('One Million');
  expect(numberToWords(1234567)).toBe(
    'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven',
  );
  expect(numberToWords(1234567891)).toBe(
    'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One',
  );
  expect(numberToWords(1000000000)).toBe('One Billion');
});
