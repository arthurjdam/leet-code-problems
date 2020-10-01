function offset(char: string, amount: number): string {
  const charCode = char.charCodeAt(0);
  if (charCode + amount > 122) {
    return String.fromCharCode(((charCode + amount) % 122) + 97);
  }
  return String.fromCharCode(charCode + amount);
}

export default function shiftingLetters(S: string, shifts: number[]): string {
  const str = S.split('');
  for (let i = 0; i < shifts.length; ++i) {
    for (let x = 0; x <= i; ++x) {
      str[x] = offset(str[x], shifts[i]);
    }
  }
  return str.join('');
}
