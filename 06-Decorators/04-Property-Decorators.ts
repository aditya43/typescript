function Log1(target: any, propertyName: string | Symbol) {
    console.log('Property decorator...');
    console.log(target, propertyName);
}

class Product1 {
    @Log1
    private _price: number = 0;
    private _tax: number = 5;

    constructor(public title: string) {}

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
}
