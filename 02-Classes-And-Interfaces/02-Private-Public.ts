class Department1 {
    private name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department1) {
        console.log(`Department: ${this.name}`);
        console.log(`Employees: ${this.employees}`)
    }

    addEmployee(employee: string) {
        // validations etc..
        this.employees.push(employee);
    }
}

const d1 = new Department1('Development');
d1.addEmployee('Aditya');
d1.addEmployee('Nishi');
d1.addEmployee('Avi');

d1.describe();