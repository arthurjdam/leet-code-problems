function flat(arr: any[]) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

export default function convert(s: string, numRows: number): string {
  if (s.length <= 2 || numRows <= 1) return s;

  const arr = new Array(s.length)
    .fill('')
    .map(() => new Array(s.length).fill(''));

  const doubleRow = numRows + (numRows - 2);

  for (let i = 0; i < s.length; ++i) {
    let x = i % doubleRow;
    let y = Math.floor(i / doubleRow) * 2;
    if (x >= numRows) {
      y += 1;
      x = numRows - (x % numRows) - 2;
    }
    arr[x][y] = s[i];
  }

    // let temp = '';
    // for (let i = 0; i < arr.length; ++i) {
    //   temp += arr[i].join(' ') + '\n';
    // }
    // console.log(temp);
  return flat(arr).join('');
}
