type UserData = {
    name: string;
    email: string;
    job: {
        title?: string; // Optional
        company?: string; // Optional
    };
};

function printDetails1(user: UserData) {
    console.log(user.name);
    console.log(user.email);

    if (user?.job?.title) {
        console.log(user.job.title); // Print job title if it exists.
    }

    if (user?.job?.company) {
        console.log(user.job.company); // Print job company if it exists.
    }
}

const userAdi: UserData = {
    name: 'Aditya',
    email: 'aditya@hajare.com',
    job: {}, // 'title' and 'company' not present!
};

const userNishi: UserData = {
    name: 'Nishigandha',
    email: 'nishi@hajare.com',
    job: {
        title: 'CEO',
        company: 'My own company',
    },
};

printDetails1(userAdi);
printDetails1(userNishi);
