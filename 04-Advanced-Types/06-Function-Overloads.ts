type Combinable = string | number;

function add(a: number, b: number): number; // Function overload
function add(a: string, b: string): string; // Function overload
function add(a: number, b: string): string; // Function overload
function add(a: string, b: number): string; // Function overload
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}

console.log(add(2, 2));
console.log(add('2', '2'));
console.log(add('2', 2));
console.log(add(2, '2'));
