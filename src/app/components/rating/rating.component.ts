import { Component, Input }   from '@angular/core';
import { IRating }            from "../../interfaces/person";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})

export class RatingComponent {

  @Input() rating: IRating;
  public stars: Array<number> = [1, 2, 3, 4, 5];

}
