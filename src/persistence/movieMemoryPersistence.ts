import {MovieRepository} from "../repositories/movieRepository";
import {MovieModel} from "../models/movieModel";


export class MovieMemoryPersistence extends MovieRepository {
    movies: MovieModel[];

    constructor() {
        super();
        this.movies = [];
    }

    delete(id: string): Boolean {
        const before_length = this.movies.length;
        this.movies.filter((movie, index) => {
            if (movie.id == id) {
                this.movies = this.movies.splice(index, 1);
            }
        });
        const after_length = this.movies.length;
        if (before_length == after_length) return false;
        return true;
    }

    findByID(id: string): MovieModel {
        let movieFound = undefined;
        this.movies.filter((movie) => {
            if (movie.id == id) {
                movieFound = movie;
            }
        });
        return movieFound;
    }

    getAll(): MovieModel[] {
        return this.movies;
    }

    save(movieModel: MovieModel): MovieModel {
        this.movies.push(movieModel);
        return movieModel;
    }

}