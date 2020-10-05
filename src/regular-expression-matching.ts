export default function isMatch(s: string, p: string): boolean {
  const acc = [[true]];

  for (let i = 1; i < p.length + 1; ++i) {
    acc[0][i] = p[i - 1] === '*' ? acc[0][i - 2] : false;
  }

  for (let i = 1; i < s.length + 1; ++i) {
    acc.push([]);
    acc[i][0] = false;
    for (let j = 1; j < p.length + 1; ++j) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
        acc[i][j] = acc[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
          acc[i][j] =
            acc[i][j - 2] === true ||
            acc[i][j - 1] === true ||
            acc[i - 1][j] === true;
        } else {
          acc[i][j] = acc[i][j - 2];
        }
      } else {
        acc[i][j] = false;
      }
    }
  }
  
  return acc[s.length][p.length];
}
