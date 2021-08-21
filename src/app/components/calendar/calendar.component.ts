import { Component, Input, OnInit } from '@angular/core';
import { IAvailability } from "../../interfaces/person";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() availabilities: Array<IAvailability>;

  public availabilitySelected: IAvailability;
  public timeSelected: any;

  ngOnInit(): void {
    this.availabilitySelected = this.availabilities[0];
  }

  onAvailabilitySelected(availability: IAvailability) {
    this.availabilitySelected = availability;
    this.timeSelected = null;
  }

}
