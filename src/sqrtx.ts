export default function mySqrt(x: number): number {
    let i = 0;
    while (i < Number.MAX_SAFE_INTEGER) {
        if (i * i > x) {
            return i - 1;
        }
        if (i * i == x) {
            return i;
        }
        ++i;
    }
    return 0;
}