import romanToInt from './roman-to-integer';

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('is output 2', () => {
  expect(romanToInt('1')).toBe(2);
});
