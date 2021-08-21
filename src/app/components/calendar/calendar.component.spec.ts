import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { MockComponent } from "ng-mocks";
import { CalendarDaysComponent } from "./components/calendar-days/calendar-days.component";
import { AVAILABILITY_MOCK } from "../../../mocks/person-mocks";

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CalendarComponent,
        MockComponent(CalendarDaysComponent)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    component.availabilities = [
      AVAILABILITY_MOCK,
      {
        date: '2021-08-20',
        times: [
          {available: true, time: "17:00"},
          {available: false, time: "17:30"},
          {available: true, time: "18:00"}
        ]
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show times by date selected', () => {
    expect(component.availabilitySelected).toEqual(component.availabilities[0]);
    let htmlElement = fixture.nativeElement as HTMLElement;
    expect(htmlElement.querySelectorAll('.time').length).toEqual(2);

    component.onAvailabilitySelected(component.availabilities[1]);
    fixture.autoDetectChanges();
    htmlElement = fixture.nativeElement as HTMLElement;
    expect(htmlElement.querySelectorAll('.time').length).toEqual(3);
  });

  it('should clear time selected on change date', () => {
    component.timeSelected = component.availabilitySelected.times[0];
    component.onAvailabilitySelected(component.availabilities[1]);

    expect(component.timeSelected).toBeNull();
  });

});
