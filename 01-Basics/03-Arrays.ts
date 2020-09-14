const Person: {
    name: String;
    city: String;
    hobbies: string[]
} = {
    name: 'Aditya',
    city: 'Pune',
    hobbies: ['Music', 'Sports', 'Cookies']
};

for (const hobby of Person.hobbies) {
    console.log(hobby)
}