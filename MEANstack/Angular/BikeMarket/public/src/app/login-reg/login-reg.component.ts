import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { localFunction } from '../functions.component'

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {

  newUser: {}
  credentials: {}

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _function: localFunction,
  ) { }

  ngOnInit() {
    this.newUser = {firstName: "", lastName: "", email: "", password: "", passwordConf: ""}
    this.credentials = {email: "", password: ""}
    // window.localStorage.clear()
    console.log(window.localStorage)
  }
  Register(){
    const psw = this.newUser['password']
    const pswConf = this.newUser['passwordConf']
    if(this._function.matchPassword(psw, pswConf)){
      console.log(true)
      let observable = this._httpService.registerSRV(this.newUser)
      observable.subscribe(data =>{
        console.log(data)
      })
    }
  }
  Login(){
    let observable = this._httpService.loginSRV(this.credentials)
    observable.subscribe(data => {
      window.localStorage.setItem('token', data['token'])
      this.goToDashboard()
    })
  }
  goToDashboard(){
    return this._router.navigate(['/dashboard','browse'])
  }
}
