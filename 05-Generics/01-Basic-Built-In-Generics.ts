const names: Array<string> = [];
names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('Hello Aditya');
        } else {
            reject('Rejected!');
        }
    }, 2000);
});

promise.then((data) => {
    data.split(' ');
});
