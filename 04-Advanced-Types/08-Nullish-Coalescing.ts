const name1 = 'Aditya';
const name2 = undefined;
const name3 = null;
const name4 = '';

console.log(name1 ?? 'DEFAULT');
console.log(name2 ?? 'DEFAULT');
console.log(name3 ?? 'DEFAULT');
console.log(name4 ?? 'DEFAULT'); // Empty string will be printed!
