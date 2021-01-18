import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MovieModel } from '../data-model/movie/movie-model';
import { ServerResponse } from '../data-model/response/server-response';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getMovies(PAGE_INDEX: string, PAGE_SIZE: string): Observable<MovieModel[]> {
    const URL = 'http://localhost:3000/movies?_page=';
    const LIMIT = '&_limit='

    return this.http.get<MovieModel[]>(URL + PAGE_INDEX + LIMIT + PAGE_SIZE);
  }
}
