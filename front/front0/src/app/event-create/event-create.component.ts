import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from './../event';
import { Router } from '@angular/router';
import { EventsService } from './../events.service';
import { ToasterService } from './../toaster.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
})
export class EventCreateComponent implements OnInit {

  eventForm: FormGroup;

  event: Event = new Event();

  startDate = new Date();

  constructor(private eventsService: EventsService,
    private toasterService: ToasterService, 
    private router: Router,
  ) {
  }


  ngOnInit(): void {
  }

  add(): void {
    this.eventsService.create(this.event).subscribe(() => {
        this.toasterService.showToaster('Event created');
        this.router.navigate(['']);
    });


}
onSubmit() {
  this.add();
};

  
}
