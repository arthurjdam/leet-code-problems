const keys: Record<string, string[]> = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

function appendSet(digits: string[]): string[] {
  const digit = digits.pop() as string;
  const x = keys[digit];
  if (digits.length > 0) {
    const y = appendSet(digits);
    const out = [];
    for (let x_ = 0; x_ < x.length; ++x_) {
      for (let y_ = 0; y_ < y.length; ++y_) {
        out.push(`${y[y_]}${x[x_]}`);
      }
    }
    return out;
  }
  return x;
}

export default function letterCombinations(digits: string): string[] {
  const splitDigits = digits
    .split('')
    .filter((digit) => digit !== '0' && digit !== '1');
  if (splitDigits.length <= 0) return [];
  return appendSet(splitDigits);
}
