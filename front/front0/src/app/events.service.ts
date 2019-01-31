import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getAll():  Observable<Array<Event>>  {
   return this.http.get<Array<Event>>('http://localhost:4200');
  }
}
