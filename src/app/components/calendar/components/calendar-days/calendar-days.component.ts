import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAvailability } from "../../../../interfaces/person";

@Component({
  selector: 'app-calendar-days',
  templateUrl: './calendar-days.component.html',
  styleUrls: ['./calendar-days.component.scss']
})
export class CalendarDaysComponent {

  @Input() availabilities: Array<IAvailability>;
  @Input() availabilitySelected: IAvailability;
  @Output() dateSelected: EventEmitter<IAvailability> = new EventEmitter<IAvailability>();

  public index = 0;
  public itemsVisible = 5;

  onSelectDate(availability: IAvailability) {
    this.dateSelected.emit(availability);
  }

  changeIndex(count: number) {
    this.index += count;
  }

}
