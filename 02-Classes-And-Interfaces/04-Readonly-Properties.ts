class Human2 {
    // public name: string;
    // private readonly age: number;

    constructor(public name: string, private readonly age: number) {
        // this.name = name;
        // this.age = age;
    }

    details() {
        console.log(`Name: ${this.name} | Age: ${this.age}`);
    }

    changeAge() {
        // this.age = 30;   // ERROR!
    }
}

const adi1 = new Human2('Aditya', 100);
adi1.details();
