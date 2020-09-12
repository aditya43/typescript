function add (num1: number, num2: number, print: boolean, msg: string) {
    const res = num1 + num2;

    if (print) {
        console.log(msg + res)
    } else {
        return res
    }
}
const num1: number = 2;
const num2: number = 3;

const res: number = add(num1, num2, false, '')