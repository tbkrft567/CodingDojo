import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient ) { }

  getAllEventsSRV(){
    console.log('***SERVICE-Index***')
    return this._http.get('/app/events')
  }

  createEventSRV(newEvent){
    console.log('***SERVICE-Create***')
    return this._http.post('/app/events/create', newEvent)
  }

}
