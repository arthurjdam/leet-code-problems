export default function addToArrayForm(A: number[], K: number): number[] {
  const K_ = String(K)
    .split('')
    .map((s) => parseInt(s, 10));

  const out = new Array(Math.max(K_.length, A.length) + 1).fill(0);
  while (K_.length < out.length) {
    K_.unshift(0);
  }
  while (A.length < out.length) {
    A.unshift(0);
  }
  let carry = 0;
  for (let i = out.length - 1; i >= 0; i--) {
    const sum = K_[i] + A[i] + carry;
    out[i] = sum % 10;
    carry = ~~(sum / 10);
  }
  while (out.length > 0) {
    if (out[0] === 0) out.shift();
    else break;
  }
  return out;
}
