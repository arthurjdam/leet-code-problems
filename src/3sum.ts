export default function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);

  const keys = new Set<string>();
  const out: number[][] = [];

  if (nums.length < 3) {
    return out;
  }

  for (let i = 0; i < nums.length - 2; ++i) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 1; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        const set = [nums[i], nums[j], nums[k]];
        const key = set.join('-');
        if (set[0] + set[1] + set[2] == 0 && !keys.has(key)) {
          keys.add(key);
          out.push(set);
        }
      }
    }
  }
  return out;
}
