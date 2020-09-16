class Person {
    name: string;

    constructor(n: string = 'John Doe') {
        this.name = n;
    }

    sayHello(this: Person) {
        console.log(`${this.name} says Hello!`)
    }
}

// Usual way, this will always work and this is how we mostly use classes:
const adi = new Person('Aditya');
adi.sayHello();

// Trick:
const nishi = { name: 'Nishigandha', sayHello: adi.sayHello };
nishi.sayHello();
