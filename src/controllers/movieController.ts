import {MovieRepository} from "../repositories/movieRepository";
import {MovieModel} from "../models/movieModel";

export class MovieControllers {
    repository: MovieRepository;

    constructor(MovieRepository) {
        this.repository = MovieRepository;
    }

    save(movie: MovieModel) {
        return this.repository.save(movie);
    }

    getAll(): MovieModel[] {
        return this.repository.getAll();
    }

    get(id: string): MovieModel {
        return this.repository.findByID(id);
    }

    delete(id: string): Boolean {
        return this.repository.delete(id);
    }

}