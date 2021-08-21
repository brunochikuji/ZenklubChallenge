import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { PERSON_MOCK } from "../../mocks/person-mocks";
import { environment } from "../../environments/environment";

describe('PersonService', () => {
  let personService: PersonService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    personService = TestBed.inject(PersonService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should get person', () => {
    personService.get().subscribe(
      person => expect(person).toEqual(PERSON_MOCK)
    )
    const req = httpController.expectOne(`${environment.apiUrl}/persons`);
    req.flush(PERSON_MOCK);

    httpController.verify();
  });

});
