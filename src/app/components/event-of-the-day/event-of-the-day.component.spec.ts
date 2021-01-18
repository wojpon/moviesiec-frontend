import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOfTheDayComponent } from './event-of-the-day.component';

describe('EventOfTheDayComponent', () => {
  let component: EventOfTheDayComponent;
  let fixture: ComponentFixture<EventOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
