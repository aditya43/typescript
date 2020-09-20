class Database1 {
    private static instance: Database1;

    private constructor() {}

    static getInstance(id: string) {
        if (!this.instance) {
            this.instance = { id };
        }

        return this.instance;
    }
}

const d2 = Database1.getInstance('Adi');
const d3 = Database1.getInstance('Nishi');

console.log(d2, d3);
