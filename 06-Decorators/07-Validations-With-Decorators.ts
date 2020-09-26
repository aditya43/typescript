interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]; // ['required', 'positive']
    };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        [propName]: ['required'],
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        [propName]: ['positive'],
    };
}

function Validate(obj: any): boolean {
    const objValidatorConfig = registeredValidators[obj.constructor.name];

    if (!objValidatorConfig) {
        return true;
    }

    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    return !!obj[prop];
                case 'positive':
                    return obj[prop] > 0;
            }
        }
    }

    return true;
}

class Course {
    @Required
    title: string;

    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;

courseForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Make sure form is not submitted

    const titleElem = document.getElementById('title') as HTMLInputElement;
    const priceElem = document.getElementById('price') as HTMLInputElement;

    const title = titleElem.value;
    const price = +priceElem.value;

    const course = new Course(title, price);

    if (!Validate(course)) {
        alert('Invalid inputs..');
    }
});
