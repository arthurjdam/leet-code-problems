export default function isMatch(s: string, p: string): boolean {
  return new RegExp(`^${p}$`, 'gi').test(s);
}
