const keys: Record<string, number> = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '0': 0,
};

function strToNum(str: string): number[] {
  const num: Array<number> = [];
  for (let i = 0; i < str.length; ++i) {
    num.push(keys[str.charAt(i)]);
  }
  return num;
}

export default function addStrings(num1: string, num2: string): string {
  const _num1 = strToNum(num1);
  const _num2 = strToNum(num2);
  let out = '';

  for (
    let i = _num1.length - 1, j = _num2.length - 1, carry = 0;
    i >= 0 || j >= 0 || carry === 1;
    i--, j--
  ) {
    const n1 = i < 0 ? 0 : _num1[i];
    const n2 = j < 0 ? 0 : _num2[j];
    const sum = n1 + n2 + carry;
    out = String(sum % 10) + out;
    carry = ~~(sum / 10);
  }
  return out;
}
