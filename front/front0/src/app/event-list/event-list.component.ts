import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from './../event';
import { Router } from '@angular/router';
import { EventsService } from './../events.service';
import { ToasterService } from './../toaster.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  displayedColumns = ['name', 'category', 'place','initDate','action'];
  eventsData: MatTableDataSource<Event>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private eventsService: EventsService,
    private toasterService: ToasterService, 
    private router: Router) { }

  ngOnInit(): void {
    this.eventsService.getAll().subscribe(events => {
      this.eventsData = new MatTableDataSource(events);
      this.eventsData.paginator = this.paginator;
      this.eventsData.sort = this.sort;
     // console.log(this.eventsData);)
    })
  }

  delete(event: Event): void {
    this.eventsService.delete(event.id).subscribe(() => {
      this.toasterService.showToaster('Event deleted, please refresh the page');
        this.router.navigate(['']);
    });
}
view(event: Event): void {
  this.router.navigate(['/event', event.id]);
}
 

}
