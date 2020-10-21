import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { MovieModel } from '../../core/data-model/movie/movie-model';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {


  constructor(private httpService: HttpService) { }

  moviesUrl = 'http://localhost:8080/movies';

  movies: MovieModel[];

  ngOnInit() {
    this.httpService
      .getMovies(this.moviesUrl)
      .subscribe((data: MovieModel[]) => (this.movies = data));
  }

}
