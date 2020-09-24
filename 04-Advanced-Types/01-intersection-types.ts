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

// Intersection type with variables
type Role1 = string | number;
type Priviledges1 = string;

type Admin1 = Role1 & Priviledges1; // Intersection type.

// const adm1: Admin1 = 2; // Error!
const adm1: Admin1 = 'Full Access'; // adm1 must only contain 'string' type value
