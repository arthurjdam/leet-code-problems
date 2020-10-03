function isPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    } else {
      l++;
      r--;
    }
  }
  return true;
}

export default function longestPalindrome(s: string): string {
  let longest = '';
  for (let i = 0; i < s.length; ++i) {
    for (let j = i; j < s.length; ++j) {
      if (s.length - j > longest.length) {
        const substr = s.substr(i, s.length - j);
        if (substr.length > longest.length && isPalindrome(substr)) {
          longest = substr;
        }
      }
    }
  }
  return longest;
}
