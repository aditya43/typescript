function combine (inp1: number | string, inp2: number | string) {
    let res: number | string;

    if (typeof inp1 === 'number' && typeof inp2 === 'number') {
        res = inp1 + inp2;
    } else {
        res = inp1.toString() + inp2.toString();
    }

    return res;
}

console.log(combine(5, 3));
console.log(combine('Aditya', 'Hajare'));