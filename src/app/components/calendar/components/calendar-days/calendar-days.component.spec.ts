import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDaysComponent } from './calendar-days.component';
import { AVAILABILITY_MOCK } from "../../../../../mocks/person-mocks";

describe('CalendarDaysComponent', () => {
  let component: CalendarDaysComponent;
  let fixture: ComponentFixture<CalendarDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDaysComponent);
    component = fixture.componentInstance;
    component.availabilities = [AVAILABILITY_MOCK];
    component.availabilitySelected = AVAILABILITY_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
