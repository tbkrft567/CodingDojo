import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

newEvent: {}
error:{}
  constructor(    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,) { }

  ngOnInit() {
    this.newEvent ={name: "", date: "", location: "", state: "", host: ""}
  }
  createEvent(){
    console.log('***COMPONENT-EVENTCREATE***')
    let observable = this._httpService.createEventSRV(this.newEvent)
    observable.subscribe(data => {
      console.log(data)
      this.showUniquenessError(data)
    })
  }











  showUniquenessError(data){
    if("UniquenessError" in data){
      this.error = {message: data.UniquenessError}
      console.log(this.error)
    }
    else{
      console.log('here')
      this.newEvent ={name: "", date: "", location: "", state: "", host: ""}
    }
  }
}
