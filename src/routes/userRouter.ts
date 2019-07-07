import * as express from "express";
import {UserControllers} from "../controllers/userController";
import {UserModel} from "../models/userModel";
//Aqui variamos la base de datos según variables de entorno
import {databaseUser} from "../db/database";


export const usersRouter = express.Router();

usersRouter.post('/', (req, res) => {
    const userController = new UserControllers(databaseUser);
    const user = new UserModel(req.body.nick, req.body.password);
    res.json(userController.save(user));
});

usersRouter.get('/', (req, res) => {
    const userController = new UserControllers(databaseUser);
    res.json(userController.getAll());
});

usersRouter.get('/:id', (req, res) => {
    const userController = new UserControllers(databaseUser);
    res.json(userController.get(req.params.id));
});

usersRouter.put('/:id', (req, res) => {
    const userController = new UserControllers(databaseUser);
    const user = new UserModel(req.body.nick, req.body.password);
    res.json(userController.save(user));
});

usersRouter.delete('/:id', (req, res) => {
    const userController = new UserControllers(databaseUser);
    res.json(userController.delete(req.params.id));
});