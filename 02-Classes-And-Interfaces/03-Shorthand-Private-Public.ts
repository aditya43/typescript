class Human1 {
    constructor(public name: string, private email: string) { }

    details() {
        console.log(`Name: ${this.name} | Email: ${this.getEmail()}`);
    }

    private getEmail() {
        return this.email;
    }
}

const ad = new Human1('Aditya', 'aditya@hajare.com');
ad.details()