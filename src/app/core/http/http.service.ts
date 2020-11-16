import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MovieModel } from '../data-model/movie/movie-model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  movieUrl = 'http://localhost:8080/movies';

  constructor(private http: HttpClient) {}

  getMovies(pageIndex: string): Observable<MovieModel[]> {
    const movieUrl = 'http://localhost:8080/movies?page=';

    return this.http
      .get<MovieModel[]>(movieUrl + pageIndex)
      .pipe(
        tap(pageIndex => console.log(pageIndex)),
        tap((data) => console.log('Data from server: ' + JSON.stringify(data)))
      );
  }
}
