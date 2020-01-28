// import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http'
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class AuthService {

   constructor() {}

   getToken() {
      return localStorage.getItem('token')
   }
}