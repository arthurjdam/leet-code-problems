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

export default function countSubstrings(s: string): number {
  let count = 0;
  for (let i = 0; i < s.length; ++i) {
    for (let j = i; j < s.length; ++j) {
      const substr = s.substr(i, s.length - j);
      if (isPalindrome(substr)) {
        count++;
      }
    }
  }
  return count;
}
