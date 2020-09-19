class User1 {
    constructor(public name: string, private email: string) {}

    print() {
        console.log(`Name: ${this.name} | Email: ${this.email}`);
    }
}

class Developer1 extends User1 {
    public type: string = 'Developer';

    constructor(name: string, email: string, private isActive: boolean) {
        super(name, email);
    }

    print() {
        super.print();
        console.log(`type: ${this.type} | isActive: ${this.isActive}`);
    }
}

class Tester1 extends User1 {
    public type: string = 'Tester';

    constructor(name: string, email: string, private isActive: boolean) {
        super(name, email);
    }

    print() {
        super.print();
        console.log(`type: ${this.type} | isActive: ${this.isActive}`);
    }
}

const u1 = new Developer1('Aditya', 'aditya@hajare.com', true);
const u2 = new Tester1('Nishi', 'nishi@hajare.com', false);

u1.print();
u1.print();
