import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

//component
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from './event-list/event-list.component';

//services
import { EventsService } from './events.service';


const appRoutes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: '', component: AppComponent },
  //{ path: 'hero/:id',      component: HeroDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
