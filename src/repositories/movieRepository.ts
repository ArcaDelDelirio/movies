import {MovieModel} from "../models/movieModel";

export abstract class MovieRepository {
    protected constructor() {
    }

    abstract save(movieModel: MovieModel): MovieModel;

    abstract delete(id: string): Boolean;

    abstract findByID(id: string): MovieModel;

    abstract getAll(): MovieModel[];
}
