import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  task = {};
  title = 'App';
  newTask=  { title: "", description: "" };
  editTask= undefined;

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    console.log("***onInit***")
    this.newTask = { title: "", description: "" }
    this.getTasksFromService();
    // this.showTaskFromService();
  }

    CreateOrUpdateTask(requestType) {
      if (requestType == 'create') {
        let observable = this._httpService.addTask(this.newTask)
        observable.subscribe(data => {
          console.log("*onSubmitCreate*")
          this.newTask = { title: "", description: "" }
        })
      }
      else if (requestType == 'update') {
        console.log(this.editTask)
        let observable = this._httpService.updateTask(this.editTask)
        observable.subscribe(data => {
          console.log("*onSubmitUpdate*")
          this.editTask = undefined
        })
      }
    }

  onSubmit(requestType) {
    console.log(requestType)
    this.CreateOrUpdateTask(requestType)
    this.getTasksFromService()
  }
  removeTaskFromService(id) {
    let observable = this._httpService.removeTask(id)
    observable.subscribe(data => {
      console.log("*taskRemoved*")
    })
    this.getTasksFromService()
  }
  getTasksFromService() {
    console.log('***ALLTASKS***')
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("*allTasks-received*")
      this.tasks = data["tasks"]
    })
  }
  showTaskFromService(id) {
    console.log('***ShowTasks***')
    let observable = this._httpService.showTask(id);
    observable.subscribe(data => {
      console.log("*showTask-received*")
      // console.log(data)
      this.task = data
    })
  }
  TaskFromServiceToEdit(id) {
    console.log("***EDIT-comp***")
    let observable = this._httpService.showTask(id);
    observable.subscribe(data => {
      console.log("*editTask-ready*")
      this.editTask = data
    })
  }
}
