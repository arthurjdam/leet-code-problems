function reverse(str: string): string {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

export default function longestPalindrome(s: string): string {
  let longest = '';
  for (let i = 0; i < s.length; ++i) {
    for (let j = i; j < s.length; ++j) {
      if (s.length - j > longest.length) {
          const substr = s.substr(i, s.length - j);
          if (substr.length > longest.length && substr === reverse(substr)) {
              longest = substr;
            }
        }
    }
  }
  return longest;
}
