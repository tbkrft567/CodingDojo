  import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newUser: {}
  loggedUser: {}
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.newUser = { email: "", first_name: "", last_name: "", password: "", birthday: "" }
    this.loggedUser = { email: "", password: ""}
  }
  registerUser(){
    let observable = this._httpService.registerUserSRV(this.newUser)
    observable.subscribe(data => {
      console.log(data["error"])
    })
  }
  loginUser(){
    let observable = this._httpService.loggedUserSRV(this.loggedUser)
    observable.subscribe(data => {
      if("error" in data){
        console.log(data)
        this.ngOnInit()
      }
      else{
        window.localStorage.setItem('token', data['token'])
        this.goToIndex()      
      }
      
    })
  }
  clearToken(){
    localStorage.clear()
    console.log(localStorage)
    this._router.navigate([''])
  }
  getToken(){
    console.log(localStorage)
    return localStorage.getItem('token')
  }
  goToIndex(){
    this._router.navigate(['index'])
  }
  goToHome(){
    this._router.navigate([''])
  }
  
}
