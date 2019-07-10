import {UserModel} from "../models/userModel";

export abstract class UserRepository {
    protected constructor() {
    }

    abstract save(movieModel: UserModel): UserModel;

    abstract delete(id: string): Boolean;

    abstract findByID(id: string): UserModel;

    abstract findByNick(nick: string): UserModel;

    abstract getAll(): UserModel[];
}