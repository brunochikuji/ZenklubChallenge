import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from "./calendar.component";
import { CalendarDaysComponent } from './components/calendar-days/calendar-days.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDaysComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
