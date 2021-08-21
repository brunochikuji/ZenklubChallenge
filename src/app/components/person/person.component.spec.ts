import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from "ng-mocks";

import { PersonComponent } from './person.component';
import { PERSON_MOCK } from "../../../mocks/person-mocks";
import { RatingComponent } from "../rating/rating.component";

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PersonComponent,
        MockComponent(RatingComponent)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    component.person = PERSON_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show half hour or one hour price', () => {
    component.person.price.oneHour = 0;
    component.person.price.halfHour = 45;
    fixture.detectChanges();
    let priceHtmlValue = <HTMLSpanElement>document.querySelector('span.price');
    expect(priceHtmlValue.textContent).toEqual('R$45');

    component.person.price.oneHour = 70;
    fixture.detectChanges();
    priceHtmlValue = <HTMLSpanElement>document.querySelector('span.price');
    expect(priceHtmlValue.textContent).toEqual('R$70');
  });

});
