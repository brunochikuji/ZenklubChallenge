import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";
import { PersonComponent } from "../../components/person/person.component";
import { RatingComponent } from "../../components/rating/rating.component";
import { CalendarModule } from "../../components/calendar/calendar.module";

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [
    HomePage,
    PersonComponent,
    RatingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CalendarModule
  ]
})

export class HomeModule { }
