interface Bird1 {
    type: 'bird';
    flyingSpeed: number;
}

interface GroundAnimal1 {
    type: 'groundAnimal';
    runningSpeed: number;
}

type Animal1 = Bird1 | GroundAnimal1;

function moveAnimal(animal: Animal1) {
    let speed: number;

    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'groundAnimal':
            speed = animal.runningSpeed;
            break;
    }

    console.log(`Moving at ${speed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 200 });
moveAnimal({ type: 'groundAnimal', runningSpeed: 100 });
