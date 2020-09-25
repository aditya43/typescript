function extractValAtKey<T extends object, U extends keyof T>(obj: T, key: U) {
    return `Value: ${obj[key]}`;
}

console.log(extractValAtKey({ name: 'Aditya' }, 'name'));
