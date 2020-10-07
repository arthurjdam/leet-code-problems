export default function longestCommonPrefix(strs: string[]): string {
  if (strs.length == 0) return '';
  if (strs.length == 1) return strs[0];

  const shortest = strs.sort((a, b) => a.length - b.length).shift() as string;
  outer: for (let i = shortest.length; i > 0; --i) {
    const current = shortest.substr(0, i);
    for (let j = 0; j < strs.length; ++j) {
      if (strs[j].substr(0, i) != current) {
        continue outer;
      }
    }
    return current;
  }
  return '';
}
