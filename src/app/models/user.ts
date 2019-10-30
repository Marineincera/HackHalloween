export class User {
    id: number;
    name: string;
    age: number;
    sexe: string;
    description: string;
    selects: string[];
    image: string;

    constructor(input: User) {
        Object.assign(this, input);
    }
}

