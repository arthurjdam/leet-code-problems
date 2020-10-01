import { expect, test } from '@jest/globals';
import addStrings from './add-strings';

test('Examples', () => {
  expect(addStrings('1', '2')).toBe('3');
  expect(addStrings('123', '4')).toBe('127');
  expect(addStrings('10000', '2')).toBe('10002');
});
