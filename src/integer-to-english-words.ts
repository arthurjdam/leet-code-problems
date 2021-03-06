const singles: Array<string> = [
  '',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
];
const exceptions: Record<number, string> = {
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
};

const minors = [
  '',
  '',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety',
];

const majors = ['', 'Thousand', 'Million', 'Billion'];

function hundred(num: number): string {
  num = num % 10 ** 3;
  const out = [];

  if (num >= 10 ** 2) {
    const hundreds = Math.floor(num / 100);
    if (exceptions[hundreds]) {
      out.push(exceptions[hundreds]);
    } else {
      out.push(singles[hundreds]);
    }
    out.push('Hundred');
  }
  if (num % 10 ** 2 >= 10) {
    if (exceptions[num % 100]) {
      out.push(exceptions[num % 100]);
    } else if (num % 100 > 0) {
      out.push(minors[Math.floor((num / 10) % 10)]);
      if (num % 10 > 0) {
        out.push(singles[num % 10]);
      }
    }
  } else if (num % 10 > 0) {
    out.push(singles[num % 10]);
  }
  return out.join(' ');
}

export default function numberToWords(num: number): string {
  if (num === 0) return 'Zero';
  const out = [];
  for (let i = 3; i >= 0; i--) {
    if (hundred(Math.floor(num / 10 ** (i * 3))).length > 0) {
      out.push(hundred(Math.floor(num / 10 ** (i * 3))));
      if (i > 0) {
        out.push(majors[i]);
      }
    }
  }

  return out.join(' ');
}
