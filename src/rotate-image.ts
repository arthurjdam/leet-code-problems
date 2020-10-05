/**
 Do not return anything, modify matrix in-place instead.
 */
export default function rotate(matrix: number[][]): void {
  const l = matrix.length;
  let swap;

  for (let i = 0; i < Math.floor(l / 2); ++i) {
    for (let j = 0; j < Math.ceil(l / 2); ++j) {
      swap = matrix[i][j];
      matrix[i][j] = matrix[l - j - 1][i];
      matrix[l - j - 1][i] = matrix[l - i - 1][l - j - 1];
      matrix[l - i - 1][l - j - 1] = matrix[j][l - i - 1];
      matrix[j][l - i - 1] = swap;
    }
  }
}
