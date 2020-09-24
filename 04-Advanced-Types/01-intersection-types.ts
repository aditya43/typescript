type Human1 = {
    name: string;
};

type User1 = {
    email: string;
};

// Intersection type
const adi1: Human1 & User1 = {
    name: 'Aditya',
    email: 'aditya@hajare.com',
};
