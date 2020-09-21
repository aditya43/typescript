// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Using custom type instead of interface
// type AddFunction = (a: number, b: number) => number;

// let add: AddFunction;
// add = (n1: number, n2: number) => n1 + n2;

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Using interface instead of custom type
interface AddFunction {
    (a: number, b: number): number;
}

let add: AddFunction;
add = (n1: number, n2: number) => n1 + n2;

console.log(add(2, 3));
