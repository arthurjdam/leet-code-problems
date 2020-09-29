const token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
const key: Record<string, number> = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

export default function romanToInt(s: string): number {
  let num = 0;
  let m;
  // eslint-disable-next-line no-cond-assign
  while ((m = token.exec(s))) {
    num += key[m[0]];
  }
  return num;
}
