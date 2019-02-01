import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

//component
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';

//services
import { EventsService } from './events.service';
import { ToasterService } from './toaster.service';
import { EventViewComponent } from './event-view/event-view.component';
import { EventCreateComponent } from './event-create/event-create.component';


const appRoutes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'event/:id', component: EventViewComponent },
  { path: 'create', component: EventCreateComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventViewComponent,
    EventCreateComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    EventsService,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
