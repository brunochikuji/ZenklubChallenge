import { Component, OnInit } from '@angular/core';
import { PersonService } from "../../services/person.service";
import { IPerson } from "../../interfaces/person";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  public person: IPerson;
  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.getPerson();
  }

  private getPerson() {
    this.personService.get().subscribe(
      person => this.person = person,
      () => alert('Error on get person, try again in a few minutes')
    );
  }

}
