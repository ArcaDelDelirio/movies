import {v4 as uuid} from 'uuid';

export class UserModel {
    id: string;
    nick: string;
    password: string;

    constructor(nick: string, password:string) {
        this.id = uuid();
        this.nick = nick;
        this.password = password;
    }

    __validate__(user: object) {
        return true
    }
}