export default function suggestedProducts(products: string[], searchWord: string): string[][] {
    const out: Array<Array<string>> = [];
    products = products.sort();
    for(let i = 1; i <= searchWord.length; ++i) {
        let tmp = [];
        const currentWord = searchWord.substr(0, i);
        for(let j = 0; j < products.length; ++j) {
            if(products[j].substr(0, i) === currentWord) {
                tmp.push(products[j]);
            }
        }
        if (tmp.length > 3) tmp = tmp.slice(0, 3);
        out.push(tmp);
    }
    return out;
}