interface Human2 {
    name: string;
    readonly email: string;

    details(): void;
}

class User2 implements Human2 {
    constructor(public name: string, public readonly email: string) {}

    details() {
        // this.email= 'aditya@hajare.com';  // Error!
        console.log(`${this.name} <${this.email}>`);
    }
}

const adi3 = new User2('Aditya', 'aditya@hajare.com');
// adi3.email = 'aditya@hajare.com';  // Error!
adi3.details();
