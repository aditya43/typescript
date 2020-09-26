function Logger2(param: string) {
    return function (constructor: Function) {
        console.log(param);
        console.log(constructor);
    };
}

@Logger2('Monolog Logger')
class Person2 {
    constructor() {
        console.log('Person2 constructor...');
    }
}

const adi2 = new Person2();
