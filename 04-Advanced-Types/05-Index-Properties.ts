interface ErrorContainer {
    [prop: string]: string;
}

const ErrorBag: ErrorContainer = {
    email: 'Not a valid email!',
    userName: 'Must start with a character!',
};
