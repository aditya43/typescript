interface Animal1 {
    type: string;
}

interface Human1 {
    name: string;
    email: string;

    greet(): void;
}

class User1 implements Animal1, Human1 {
    constructor(
        public type: string,
        public name: string,
        public email: string,
    ) {}

    greet(): void {
        console.log(`${this.name} | ${this.email} | ${this.type}`);
    }
}

const adi2: Human1 = new User1('Human', 'Aditya', 'aditya@hajare.com');

adi2.greet();
