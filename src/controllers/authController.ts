import * as express from "express";
import {UserRepository} from "../repositories/userRepository";

export class AuthController {
    repository: UserRepository;
    constructor(req, res, repository){
        this.repository = repository;
    }
}