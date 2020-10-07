export default function searchRange(nums: number[], target: number): number[] {
  let [start, end] = [-1, -1];
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === target) {
      if (start < 0) {
        start = i;
      }
      end = i;
    } else if (nums[i] > target) {
      break;
    }
  }
  return [start, end];
}
