import * as express from "express";
import {MovieControllers} from "../controllers/movieController";
import {MovieModel} from "../models/movieModel";
//Aqui variamos la base de datos según variables de entorno
import {databaseMovie} from "../db/database";


export const moviesRouter = express.Router();

moviesRouter.post('/', (req, res) => {
    const movieController = new MovieControllers(databaseMovie);
    const movie = new MovieModel(req.body.title);
    res.json(movieController.save(movie));
});

moviesRouter.get('/', (req, res) => {
    const movieController = new MovieControllers(databaseMovie);
    res.json(movieController.getAll());
});

moviesRouter.get('/:id', (req, res) => {
    const movieController = new MovieControllers(databaseMovie);
    res.json(movieController.get(req.params.id));
});

moviesRouter.put('/:id', (req, res) => {
    const movieController = new MovieControllers(databaseMovie);
    const movie = new MovieModel(req.body.title);
    res.json(movieController.save(movie));
});

moviesRouter.delete('/:id', (req, res) => {
    const movieController = new MovieControllers(databaseMovie);
    res.json(movieController.delete(req.params.id));
});