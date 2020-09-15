type inpType = number | string;

function combine(input1: inpType, input2: inpType) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return +input1 + +input2;
    } else {
        return input1.toString() + input2.toString();
    }
}

console.log(combine('Aditya', 'Hajare'));
console.log(combine(3, 2));