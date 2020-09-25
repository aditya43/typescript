function merge<T extends object, U extends object>(a: T, b: U) {
    return (<any>Object).assign(a, b);
}

const mergedObj = merge({ name: 'Aditya', city: 'Pune' }, { year: 2020 });
console.log(mergedObj.name);
