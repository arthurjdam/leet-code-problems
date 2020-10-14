export default function mySqrt(x: number): number {
  let i = 0;
  while (i < Number.MAX_SAFE_INTEGER) {
    if (i * i > x) {
      return i - 1;
    }
    if (i * i == x) {
      return i;
    }
    ++i;
  }
  return 0;
}

export function mySqrt2(x: number): number {
  return Math.floor(Math.pow(x, 0.5));
}

export function mySqrt3(x: number): number {
  return Math.floor(Math.sqrt(x));
}
