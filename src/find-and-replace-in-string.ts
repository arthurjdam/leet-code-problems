export default function findReplaceString(
  S: string,
  indexes: number[],
  sources: string[],
  targets: string[],
): string {
  let out = '';
  for (let i = 0; i < S.length; ++i) {
    const index = indexes.indexOf(i);
    if (index > -1 && S.substr(i, sources[index]?.length) === sources[index]) {
      out += targets[index];
      i += sources[index]?.length - 1;
    } else {
      out += S.charAt(i);
    }
  }
  return out;
}
