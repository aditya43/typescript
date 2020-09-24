// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// typeof
let foo1: string | number = 222;

if (typeof foo1 === 'number') {
    console.log(`${foo1} is a number`);
} else {
    console.log(`${foo1} is a string`);
}
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// 'property' in Object
type Foo2 = {
    name?: string;
    date?: Date;
};

function details(foo2: Foo2) {
    if ('name' in foo2) {
        console.log(`Name: ${foo2.name}`);
    }

    if ('date' in foo2) {
        console.log(`Date: ${foo2.date}`);
    }
}

let foo2: Foo2 = {
    name: 'Aditya',
    // date: new Date(),
};

details(foo2);
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// 'instanceof' for classes
class Human2 {
    sayHello() {
        console.log('Hello from Human');
    }
}

class Dog1 {
    bark() {
        console.log('Bark from Dog');
    }
}

function greet1(obj: Human2 | Dog1) {
    if (obj instanceof Human2) {
        obj.sayHello();
    }

    if (obj instanceof Dog1) {
        obj.bark();
    }
}

greet1(new Human2());
greet1(new Dog1());
