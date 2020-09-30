const singles = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine'
];
const exceptions: Record<number, string> = {
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
};

const minors = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
];

function hundred(num: number): string {
    num = num % 10 ** 3;

    if (num < 10) return singles[num];
    if (num < 10 ** 2) {
        if (exceptions[num]) {
            return exceptions[num];
        }
        return `${minors[Math.floor(num / 10)]} ${singles[num % 10]}`;
    }

    return `${singles[Math.floor(num / 100)]} Hundred ${minors[Math.floor(num / 10) % 10]} ${singles[num % 10]}`;
}

export default function numberToWords(num: number): string {    
    if (num < 10 ** 3) {
        return hundred(num);
    } else if (num < 10 ** 6) {
        return `${hundred(Math.floor(num / 10 ** 3))} Thousand ${hundred(num)}`; 
    } else if (num < 10 ** 9) {
        return `${hundred(Math.floor(num / 10 ** 6))} Million ${hundred(Math.floor(num / 10 ** 3))} Thousand ${hundred(num)}`; 
    }
    return `${hundred(Math.floor(num / 10 ** 9))} Billion ${hundred(Math.floor(num / 10 ** 6))} Million ${hundred(Math.floor(num / 10 ** 3))} Thousand ${hundred(num)}`;
};