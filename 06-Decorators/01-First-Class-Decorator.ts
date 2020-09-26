function Logger1(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger1
class Person1 {
    private name: string = 'Aditya';

    constructor() {
        console.log('Person constructor...');
    }

    get Name() {
        return this.name;
    }
}

const adi = new Person1();
