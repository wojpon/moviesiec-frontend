import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MovieModel } from 'src/app/core/data-model/movie/movie-model';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css'],
})
export class MovieTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['image', 'title', 'year', 'director', 'rating'];
  dataSource: MatTableDataSource<MovieModel>;


  @Input() movies: MovieModel[];
  @Output() pageIndex = new EventEmitter<number>();

  constructor() {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<MovieModel>(this.movies);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  passPageIndex(pageEvent: PageEvent) {
    this.pageIndex.emit(pageEvent.pageIndex);
  }
}
