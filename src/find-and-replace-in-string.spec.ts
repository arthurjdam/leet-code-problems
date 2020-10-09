import { expect, test } from '@jest/globals';
import findReplaceString from './find-and-replace-in-string';

test('Input examples', () => {
  expect(findReplaceString('abcd', [0, 2], ['a', 'bc'], ['eee', 'ffff'])).toBe(
    'eeebffff',
  );
  expect(findReplaceString('abcd', [0, 2], ['ab', 'ec'], ['eee', 'ffff'])).toBe(
    'eeecd',
  );
});
