import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from 'src/shared/material-module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { FormsModule } from '@angular/forms';
import { MovieOfTheDayComponent } from './components/movie-of-the-day/movie-of-the-day.component';
import { SecondaryToolbarComponent } from './components/secondary-toolbar/secondary-toolbar.component';
import { EventOfTheDayComponent } from './components/event-of-the-day/event-of-the-day.component';
import { NewsPanelComponent } from './components/news-panel/news-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    MovieTableComponent,
    MovieListComponent,
    HomepageComponent,
    MovieOfTheDayComponent,
    SecondaryToolbarComponent,
    EventOfTheDayComponent,
    NewsPanelComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgMatSearchBarModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
