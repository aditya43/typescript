interface Profile {
    name: string;
    email: string;
    age: number;
}

function fetchProfile(): Partial<Profile> {
    let profile: Partial<Profile> = {};

    profile.name = 'Aditya';
    profile.email = 'aditya@hajare.com';

    return profile;
}

console.log(fetchProfile());

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

const names1: Readonly<string[]> = ['Adi', 'Nishi'];
// names1.push('Avi'); // Error!
// names1.pop(); // Error!
