import { Component, Input } from '@angular/core';
import { IPerson } from "../../interfaces/person";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  @Input() person: IPerson;
  onImgError($event: any) {
    $event.target.src = '/assets/images/person.png';
  }

}
