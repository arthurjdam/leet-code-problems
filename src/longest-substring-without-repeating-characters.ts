export default function lengthOfLongestSubstring(s: string): number {
  let longest = '';
  for (let i = 0; i < s.length; ++i) {
    let current = '';
    for (let j = i; j < s.length; ++j) {
      if (current.indexOf(s[j]) === -1) {
        current += s[j];
      } else {
        break;
      }
    }
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest.length;
}
