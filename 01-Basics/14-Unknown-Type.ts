// NOTE: 'unknown' type is not assignable to static types.

let myNumber: unknown = 2;
let someNumber: number = 5;

console.log(myNumber);

// ERROR:
// someNumber = myNumber;
// console.log(someNumber);