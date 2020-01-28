// import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { AuthInterceptor } from './auth-interceptor'
// import { HttpHeaders_ } from './auth.service';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catch'/*


//This is a comment 

@Injectable({
  providedIn: 'root',
})
export class HttpService {
token: any
header: any
  constructor(private _http: HttpClient,
    private _httpInterpretor: AuthInterceptor) {
  }



  // registerUserSRV(newUser) {
  //   return this._http.post('/app/users/create', newUser, {headers: this.header })
  // }
  // loggedUserSRV(loggedUser) {
  //   return this._http.post('/app/sessions/create', loggedUser, {headers: this.header })
  // }
  // getAllUsersSRV() {
  //   return this._http.get('/app/users/index', {headers: this.header })
  // }
  // logoutSRV() {
  //   return this._http.get('/app/sessions/destroy', {headers: this.header })
  // }
  registerUserSRV(newUser) {
    return this._http.post('/app/users/create', newUser)
  }
  loggedUserSRV(loggedUser) {
    return this._http.post('/app/sessions/create', loggedUser)
  }
  getAllUsersSRV() {
    return this._http.get('/app/users/index')
  }
  logoutSRV() {
    return this._http.get('/app/sessions/destroy')
  }
  getToken(){
    return window.localStorage.getItem('token')
  }
}