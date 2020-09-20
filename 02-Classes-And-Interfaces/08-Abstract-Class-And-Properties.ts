abstract class BaseController1 {
    protected logger: {};

    constructor(protected name: string) {
        this.logger = {}; // Some sort of logger
    }

    abstract init(): void;

    printLogs() {
        console.log(this.logger);
    }
}

class UserController1 extends BaseController1 {
    constructor() {
        super('UserController');
    }

    init() {
        const msg = 'Init called!';

        this.logger = { msg };
    }
}

const u3 = new UserController1();
u3.init();
u3.printLogs();
