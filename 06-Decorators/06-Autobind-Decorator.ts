function Autobind(_: any, _2: string, desc: PropertyDescriptor) {
    const originalMethod = desc.value;

    const newDesc: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        },
    };

    return newDesc;
}

class Printer {
    msg = 'Hello Aditya';

    @Autobind
    showMessage() {
        console.log(this.msg);
    }
}

const p = new Printer();
const btn = document.querySelector('button')!;

// btn.addEventListener('click', p.showMessage.bind(p)); // Workaround!
btn.addEventListener('click', p.showMessage); // Workaround!
