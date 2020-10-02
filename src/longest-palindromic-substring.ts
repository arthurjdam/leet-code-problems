export default function longestPalindrome(s: string): string {
  let longest = '';
  for (let i = 0; i < s.length; ++i) {
    for (let j = i; j < s.length; ++j) {
      if (j - i < longest.length) continue;
      const substr = s.substr(i, s.length - j);
      if (
        substr === substr.split('').reverse().join('') &&
        substr.length > longest.length
      ) {
        longest = substr;
      }
    }
  }
  return longest;
}
