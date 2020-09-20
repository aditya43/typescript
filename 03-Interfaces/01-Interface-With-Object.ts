interface Person1 {
    name: string;
    email: string;

    greet(): void;
}

let adi1: Person1; // adi1 is of type Person1

adi1 = {
    name: 'Aditya',
    email: 'aditya@hajare.com',
    greet() {
        console.log(`Hello, I am ${this.name} <${this.email}>`);
    },
};

adi1.greet();
