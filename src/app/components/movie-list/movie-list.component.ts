import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HttpService } from 'src/app/core/http/http.service';
import { MovieModel } from '../../core/data-model/movie/movie-model';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  pageIndex: number;
  movies$ = this.httpService.getMovies('1');

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  setPageIndex(pageIndex: number) {
    this.pageIndex = pageIndex + 1;
    console.log(this.pageIndex);
  }
}
