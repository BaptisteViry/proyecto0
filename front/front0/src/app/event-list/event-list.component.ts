import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from './../event';
import { Router } from '@angular/router';
import { EventsService } from './../events.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

 // eventsData: Array<Event>;

  displayedColumns = ['name', 'category', 'place'];
  eventsData: MatTableDataSource<Event>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private eventsService: EventsService, 
    private router: Router) { }

  ngOnInit(): void {
    this.eventsService.getAll().subscribe(events => {
      this.eventsData = new MatTableDataSource(events);
      this.eventsData.paginator = this.paginator;
      this.eventsData.sort = this.sort;
     // console.log(this.eventsData);)
    })
  }

 

}
