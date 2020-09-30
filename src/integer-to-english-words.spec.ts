import { expect, test } from '@jest/globals';
import numberToWords from './integer-to-english-words';

test('Integer to English Words', () => {
    expect(numberToWords(4)).toBe('Four');
    expect(numberToWords(12)).toBe('Twelve');
    expect(numberToWords(24)).toBe('Twenty Four');
    expect(numberToWords(123)).toBe('One Hundred Twenty Three');
    expect(numberToWords(12345)).toBe('Twelve Thousand Three Hundred Forty Five');
    expect(numberToWords(1234567)).toBe('One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
    expect(numberToWords(1234567891)).toBe('One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One');
});
