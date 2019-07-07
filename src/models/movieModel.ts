import {v4 as uuid} from 'uuid';

export class MovieModel {
    id: string;
    title: string;
    date: string;

    constructor(title: string) {
        this.id = uuid();
        this.title = title;
    }

    __validate__(movie: object) {
        return true
    }
}


