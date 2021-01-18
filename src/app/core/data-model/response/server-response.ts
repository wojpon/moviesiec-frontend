import { MovieModel } from "../movie/movie-model";

export interface ServerResponse {
    id: number;
    totalItems: number;
    movies: MovieModel[];
    totalPages: number;
}
