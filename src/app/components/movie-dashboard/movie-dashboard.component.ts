import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';
import { MovieModel } from '../../core/data-model/movie/movie-model';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css'],
})
export class MovieDashboardComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  moviesUrl = 'http://localhost:8080/movies/';

  movie: MovieModel;

  ngOnInit() {
    const stringID = this.route.snapshot.paramMap.get('stringid');
    // this.httpService
    //   .getMovie(this.moviesUrl, stringID)
    //   .subscribe((data: MovieModel) => (this.movie = data));
  }

  onBack():void {
    this.router.navigate(['/movies'])
  }
}
