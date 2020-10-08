export default function threeSum(nums: number[], target = 0): number[][] {
  nums = nums.sort((a, b) => a - b);

  const out: number[][] = [];

  if (nums.length < 3) {
    return out;
  }

  for (let i = 0; i < nums.length - 2; ++i) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        out.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      }
    }
  }
  return out;
}
