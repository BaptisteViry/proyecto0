import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from './../event';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from './../events.service';
import { ToasterService } from './../toaster.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  event: Event = new Event();

  constructor(private eventsService: EventsService,
    private toasterService: ToasterService,
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.event.id = params['id'];
      this.eventsService.getById(+this.event.id).subscribe(event => {
          this.event = event;
      });
  });
  }

}
