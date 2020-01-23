import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
// import { EventCreateComponent } from './events/event-create/event-create.component';
// import { EventEditComponent } from './events/event-edit/event-edit.component';
// import { CommentIndexComponent } from './events/comment-index/comment-index.component'


const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'events/:eventId/show', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
