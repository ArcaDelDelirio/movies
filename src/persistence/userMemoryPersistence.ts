import {UserRepository} from "../repositories/userRepository";
import {UserModel} from "../models/userModel";


export class UserMemoryPersistence extends UserRepository {
    users: UserModel[];

    constructor() {
        super();
        this.users = [];
    }

    delete(id: string): Boolean {
        const before_length = this.users.length;
        this.users.filter((user, index) => {
            if (user.id == id) {
                this.users = this.users.splice(index, 1);
            }
        });
        const after_length = this.users.length;
        if (before_length == after_length) return false;
        return true;
    }

    findByID(id: string): UserModel {
        let userFound = undefined;
        this.users.filter((user) => {
            if (user.id == id) {
                userFound = user;
            }
        });
        return userFound;
    }

    findByNick(nick: string): UserModel {
        let userFound = undefined;
        this.users.filter((user) => {
            if (user.nick == nick) {
                userFound = user;
            }
        });
        return userFound;
    }

    getAll(): UserModel[] {
        return this.users;
    }

    save(userModel: UserModel): UserModel {
        this.users.push(userModel);
        return userModel;
    }

}