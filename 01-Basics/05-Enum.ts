enum Role { ADMIN, READ_ONLY, AUTHOR };

const Person: {
    name: string;
    role: Role;
} = {
    name: 'Aditya',
    role: Role.ADMIN
};

if (Person.role === Role.ADMIN) {
    console.log('Is Admin');
}