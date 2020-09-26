function Logger3(param: string) {
    return function (constructor: Function) {
        console.log(param);
        console.log(constructor);
    };
}

function WithTemplate1(template: string, id: string) {
    return function (_: Function) {
        const domElem = <HTMLDivElement>document.getElementById(id);

        if (domElem) {
            domElem.innerHTML = template;
        }
    };
}

@Logger3('Monolog Logger...')
@WithTemplate1('<h1>Hello Aditya</h1>', 'app')
class Person3 {
    constructor() {
        console.log('Person3 constructor...');
    }
}

const adi3 = new Person3();
