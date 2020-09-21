interface Animal2 {
    type: string;
}

interface Human3 extends Animal2 {
    name: string;
    email: string;

    greet(): void;
}

class User3 implements Human3 {
    constructor(
        public type: string,
        public name: string,
        public email: string,
    ) {}

    greet(): void {
        console.log(`${this.name} | ${this.email} | ${this.type}`);
    }
}

const adi4: Human3 = new User3('Human', 'Aditya', 'aditya@hajare.com');

adi4.greet();
