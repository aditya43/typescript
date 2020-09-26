function Log2(target: any, propertyName: string | Symbol) {
    console.log('Property decorator...');
    console.log(target, propertyName);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor,
) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log5(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product2 {
    @Log1
    title: string;

    private _price: number = 0;
    private _tax: number = 5;

    constructor(title: string) {
        this.title = title;
    }

    @Log3
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        }
    }

    set tax(val: number) {
        this._tax = val;
    }

    get price() {
        return this._price * (1 + this._tax);
    }

    @Log4
    sayHello(@Log5 name: string = 'Aditya') {
        console.log(`Hello ${name}`);
    }
}

const book1 = new Product2('TypeScript');
book1.price = 20.22;
book1.tax = 2.4;
book1.sayHello('Nishi');
