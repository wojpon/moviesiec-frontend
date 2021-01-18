import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { MovieModel } from '../../core/data-model/movie/movie-model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ServerResponse } from 'src/app/core/data-model/response/server-response';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  pageIndex = 1;
  currentIndex = -1; 
  totalItems = 100;

  pageSize = 5;
  pageSizes = [5, 10, 15];
  displayedColumns: string[] = ['id', 'title', 'rank'];
  movies$: Observable<MovieModel[]>;

  constructor(private httpService: HttpService) {}
  ngOnInit(): void {
   this.getData();
  }

  getData(): void {
    this.movies$ = this.httpService.getMovies(String(this.pageIndex), String(this.pageSize));
  }

  handlePageChange(event): void {
    this.pageIndex = event;
    this.getData();
    console.log(event);
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.pageIndex = 1;
    this.getData();
  }

  // retrieveMovies(): void {
  //   this.httpService.getMovies(String(this.pageIndex)).subscribe((data) => {
  //     this.totalItems = data.totalItems;
  //     this.movies = data.movies;
  //     console.log(data);
  //   });
  // }

  // handlePageChange(change: number) {
  //   this.pageIndex = change;
  //   // this.retrieveMovies();
  // }
}
