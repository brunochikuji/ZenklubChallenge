import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, MockProvider } from "ng-mocks";
import { of } from "rxjs";

import { HomePage } from './home.page';
import { PERSON_MOCK } from "../../../mocks/person-mocks";
import { PersonService } from "../../services/person.service";
import { PersonComponent } from "../../components/person/person.component";
import { CalendarComponent } from "../../components/calendar/calendar.component";

describe('HomeComponent', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomePage,
        MockComponents(PersonComponent, CalendarComponent)
      ],
      providers: [
        MockProvider(PersonService, {
          get: () => {return of(PERSON_MOCK)}
        })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show and hide spinner', () => {
    expect(document.querySelector('img.loading')).toBeNull();
    // @ts-ignore
    component.person = undefined;
    fixture.detectChanges();
    expect(document.querySelector('img.loading')).toBeDefined();
  });

});
