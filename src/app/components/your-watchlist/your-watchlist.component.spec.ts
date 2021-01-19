import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourWatchlistComponent } from './your-watchlist.component';

describe('YourWatchlistComponent', () => {
  let component: YourWatchlistComponent;
  let fixture: ComponentFixture<YourWatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourWatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
