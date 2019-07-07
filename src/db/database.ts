import {MovieMemoryPersistence} from "../persistence/movieMemoryPersistence";
import {UserMemoryPersistence} from "../persistence/userMemoryPersistence";

export const databaseMovie = new MovieMemoryPersistence();
export const databaseUser = new UserMemoryPersistence()