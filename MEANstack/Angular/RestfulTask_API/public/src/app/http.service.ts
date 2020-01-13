import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable(
  { providedIn: 'root' }
)
export class HttpService {
  id: string;
  constructor(private _http: HttpClient) {
    this.getTasks();
    this.showTask("5e1cb1e51be87e0b68f9be86");
  }

  getTasks() {
    //our http response is an observanle, store it in the variable tempObservable
    let tempObservable = this._http.get('/tasks');
    //subscribe to our observable and provide the code we would like to do with out data from the response
    tempObservable.subscribe(data => console.log("Got our task!", data));
  }
  showTask(id){
    //our http response is an observanle, store it in the variable tempObservable
    let tempObservable = this._http.get('/tasks/show/'+id);
    //subscribe to our observable and provide the code we would like to do with out data from the response
    tempObservable.subscribe(data => console.log("Got our task!", data));
  }
}
