// Method #1
const userInputElement1 = <HTMLInputElement>(
    document.getElementById('user-input')!
);

userInputElement1.value = 'Hello Aditya';

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Method #2
const userInputElement2 = document.getElementById(
    'user-input',
)! as HTMLInputElement;

userInputElement2.value = 'Hello Aditya';

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Method #3
const userInputElement3 = document.getElementById('user-input');

if (userInputElement3) {
    (userInputElement3 as HTMLInputElement).value = 'Hello Aditya';
}
