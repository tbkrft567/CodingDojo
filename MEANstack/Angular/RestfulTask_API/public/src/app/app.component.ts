import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  task = ""
  title = 'App';
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTasksFromService();
    this.showTaskFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("got our tasks!", data)
      this.tasks = data["tasks"]
    })
  }
  showTaskFromService(){
    let observable = this._httpService.showTask("5e1cb1e51be87e0b68f9be86");
    observable.subscribe(data => {
      console.log("got one task!", data)
      // console.log(data)
      this.task = data["title"]
    })
  }
}
