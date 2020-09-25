function merge<T, U>(a: T, b: U) {
    return Object.assign(a, b);
}

const mergedObj = merge({ name: 'Aditya', city: 'Pune' }, { year: 2020 });
console.log(mergedObj.name);
