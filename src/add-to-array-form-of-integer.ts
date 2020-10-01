export default function addToArrayForm(A: number[], K: number): number[] {
    return String(parseInt(A.join(''), 10) + K).split('').map(s => parseInt(s, 10));
}
