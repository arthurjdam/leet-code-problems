const key: Array<string> = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
function getDigit(num: number, pos: number): string {
  if (num === 0) {
    return '';
  }
  if (num < 4) {
    return key[2 * pos].repeat(num);
  }
  if (num === 4) {
    return key[2 * pos] + key[2 * pos + 1];
  }
  if (num < 9) {
    return key[2 * pos + 1] + key[2 * pos].repeat(num - 5);
  }
  return key[2 * pos] + key[2 * (pos + 1)];
}

export default function intToRoman(num: number): string {
  return (
    getDigit(Math.floor(num / 1000) % 10, 3) +
    getDigit(Math.floor(num / 100) % 10, 2) +
    getDigit(Math.floor(num / 10) % 10, 1) +
    getDigit(num % 10, 0)
  );
}
