class Human3 {
    constructor(public name: string, private email: string = '') {}

    set setEmail(email: string) {
        this.email = email;
    }

    get getEmail(): string {
        return this.email;
    }
}

const h3 = new Human3('Aditya');
h3.setEmail = 'aditya@hajare.com';

console.log(h3.getEmail);
