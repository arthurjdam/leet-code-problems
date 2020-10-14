export default function isValid(s: string): boolean {
  function reduce(s_: string): string {
    return s_.replace('{}', '').replace('[]', '').replace('()', '');
  }

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const s_ = reduce(s);
    if (s_.length === 0) return true;
    if (s_ === s) return false;
    s = s_;
  }
}
