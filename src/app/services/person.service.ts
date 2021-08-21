import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPerson} from "../interfaces/person";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<IPerson> {
    return this.httpClient.get<IPerson>(`${environment.apiUrl}/persons`);
  }

}
