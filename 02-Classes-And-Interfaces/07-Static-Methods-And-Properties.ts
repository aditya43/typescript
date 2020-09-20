class Human4 {
    static isAlive: boolean = true;

    constructor(public name: string) {}

    static sayHello() {
        console.log(`Hello`);
    }

    details() {
        console.log(`Name: ${this.name} | isAlive: ${Human4.isAlive}`);
    }
}

const h4 = new Human4('Aditya');
h4.details();

console.log(Human4.isAlive);
Human4.sayHello();
