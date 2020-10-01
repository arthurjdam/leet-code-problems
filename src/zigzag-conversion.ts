export default function convert(s: string, numRows: number): string {
  const rows = new Array(numRows).fill('');

  if (numRows <= 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    const row = numRows - Math.abs(numRows - 1 - (i % (2 * (numRows - 1)))) - 1;
    rows[row] += s[i];
  }

  return rows.reduce((acc, val) => (acc += val), '');
}
