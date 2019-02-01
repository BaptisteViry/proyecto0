import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from './event';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getAll():  Observable<Array<Event>>  {
   return this.http.get<Array<Event>>('http://localhost:8089');
  }

  delete(id: Number): Observable<Event> {
    return this.http.post<Event>(`http://localhost:8089/${id}/delete`, httpOptions);
  }

  
  getById(id: number): Observable<Event> {
    return this.http.get<Event>(`http://localhost:8089/${id}`);
}

create(event: Event): Observable<Event> {
  return this.http.post<Event>(`http://localhost:8089/create`, event);
}


}
