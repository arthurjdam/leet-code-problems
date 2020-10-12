export default function threeSumClosest(
  nums: number[],
  target: number,
): number {
  nums = nums.sort((a, b) => a - b);

  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; ++i) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        return target;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
      if (Math.abs(closestSum - target) > Math.abs(sum - target)) {
        closestSum = sum;
      }
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return closestSum;
}
