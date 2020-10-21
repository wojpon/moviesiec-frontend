import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '../data-model/movie/movie-model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getMovies(URL: string): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(URL);
  }
  getMovie(URL: string, MOVIE_ID: string): Observable<MovieModel> {
    return this.http.get<MovieModel>(URL + MOVIE_ID);
  }
}
