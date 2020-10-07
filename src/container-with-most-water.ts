export default function maxArea(height: number[]): number {
    let largest = 0;
    for(let i = height.length - 1; i > 0; --i) {
        for(let j = 0; j < i; ++j) {
            const area = (i - j) * Math.min(height[i], height[j])
            if (area > largest) {
                largest = area;
            }
        }
    }
    return largest;
}
