export class User {

    name: string;
    age: number;
    sex: string;
    bloody?: boolean;
    describe: string;
    kawai: boolean;
    levelscary?: number;
    nocturnal?: boolean;
    picture: string;
    repulsive?: number;
    vicious?: boolean;

    constructor(input?: User) {
        Object.assign(this, input);
    }

}

