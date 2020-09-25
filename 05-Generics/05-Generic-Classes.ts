class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const strDs = new DataStorage<string>();
strDs.addItem('Adi');
strDs.addItem('Nishi');
console.log(strDs.getItems());
strDs.removeItem('Adi');
console.log(strDs.getItems());

const numDs = new DataStorage<number>();
numDs.addItem(2);
numDs.addItem(3);
console.log(numDs.getItems());
numDs.removeItem(3);
console.log(numDs.getItems());
