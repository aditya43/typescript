interface Greetable {
    readonly name?: string; // 'name' property is optional
    readonly email: string; // 'email' is required
    greet?(): void; // 'greet()' method is optional
}

class HelloHuman implements Greetable {
    constructor(public email: string, public name?: string) {}

    sayHello() {
        console.log(`Hello ${this.email} | ${this.name}`);
    }
}

const hh = new HelloHuman('aditya@hajare.com');
hh.sayHello();
