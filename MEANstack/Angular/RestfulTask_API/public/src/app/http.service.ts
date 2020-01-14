import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable(
  { providedIn: 'root' }
)
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.showTask("5e1cb1e51be87e0b68f9be86");
  }

  getTasks() {
    // // our http response is an observanle, store it in the variable tempObservable
    // let tempObservable = this._http.get('/tasks');
    //subscribe to our observable and provide the code we would like to do with out data from the response
    // // tempObservable.subscribe(data => console.log("Got our task!", data));
    
    return this._http.get('/tasks')
  }
  showTask(id){
    console.log('***SHOW***')
    // //our http response is an observanle, store it in the variable tempObservable
    // let tempObservable = this._http.get('/tasks/show/'+id);
    // //subscribe to our observable and provide the code we would like to do with out data from the response
    // tempObservable.subscribe(data => console.log("Got our task!", data));
    return this._http.get('/tasks/show/'+id)
  }
  addTask(newtask){
    return this._http.post('/tasks/create', newtask)
  }
  updateTask(editTask){
    console.log('***UPDATE-service***')
    return this._http.put('/tasks/update', editTask)
  }
  removeTask(taskID){
    console.log(taskID)
    return this._http.delete('/tasks/destroy/'+taskID)
  }
}
