import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgModule } from '@angular/core'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  editForm: boolean
  allEvents: {};
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    // this.editForm = false
    this.getAllEvents()
  }

  getAllEvents(){
  let observable = this._httpService.getAllEventsSRV()
  observable.subscribe(data => {
    this.allEvents = data
  })
  }

  exposeEditForm() {
    if (!this.editForm) {
      this.editForm = true
    }
    else {
      this.editForm = false
    }
  }
}
