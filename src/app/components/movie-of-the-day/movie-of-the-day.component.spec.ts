import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOfTheDayComponent } from './movie-of-the-day.component';

describe('MovieOfTheDayComponent', () => {
  let component: MovieOfTheDayComponent;
  let fixture: ComponentFixture<MovieOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
