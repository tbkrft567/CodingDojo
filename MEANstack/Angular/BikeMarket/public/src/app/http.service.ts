import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  registerSRV(newUser){
    return this._http.post('/app/users/create', newUser)
  }
  loginSRV(credentials){
    return this._http.post('/app/sessions/create', credentials)
  }
  allBikesSRV(){
    return this._http.get('/app/bikes/index')
  }
  getAllMyBikesSRV(){
    return this._http.get('/app/users/show/bikes/index')
  }
  createBikeSRV(newBike){
    return this._http.post('/app/bikes/create', newBike)
  }
  currentUserSRV(){
    return this._http.get('/app/users/show')
  }
  getAllUsersSRV(){
    return this._http.get('/app/users/index')
  }
  deleteBikeSRV(bikeId){
    return this._http.delete("/app/bikes/destroy/"+bikeId)
  }
}
