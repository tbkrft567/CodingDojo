import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { CommentIndexComponent } from './events/comment-index/comment-index.component'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventDetailsComponent,
    EventCreateComponent,
    EventEditComponent,
    CommentIndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
