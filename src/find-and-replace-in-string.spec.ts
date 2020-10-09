import { expect, test } from '@jest/globals';
import findReplaceString from './find-and-replace-in-string';

test('Input examples', () => {
  expect(findReplaceString('abcd', [0, 1], ['a', 'bc'], ['eee', 'ffff'])).toBe(
    'eeeffffd',
  );
  expect(findReplaceString('abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff'])).toBe(
    'eeebffff',
  );
  expect(findReplaceString('abcd', [0, 2], ['ab', 'ec'], ['eee', 'ffff'])).toBe(
    'eeecd',
  );
});
