import {UserRepository} from "../repositories/userRepository";
import {UserModel} from "../models/userModel";

export class UserControllers {
    repository: UserRepository;

    constructor(UserRepository) {
        this.repository = UserRepository;
    }

    save(user: UserModel) {
        return this.repository.save(user);
    }

    getAll(): UserModel[] {
        return this.repository.getAll();
    }

    get(id: string): UserModel {
        return this.repository.findByID(id);
    }

    delete(id: string): Boolean {
        return this.repository.delete(id);
    }

}