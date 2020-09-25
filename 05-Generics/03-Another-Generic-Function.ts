interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(elem: T): [T, string] {
    let desc = `Length: ${elem.length}`;

    return [elem, desc];
}

console.log(countAndDescribe('Hi Aditya'));
console.log(countAndDescribe(['Pune', 'Mumbai', 'Delhi', 'Goa']));
