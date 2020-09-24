// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Intersection type with objects
type Human1 = {
    name: string;
};

type User1 = {
    email: string;
};

type Adi1 = Human1 & User1; // Intersection type

let a1: Adi1;
a1 = {
    name: 'Aditya',
    email: 'aditya@hajare.com',
};

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
