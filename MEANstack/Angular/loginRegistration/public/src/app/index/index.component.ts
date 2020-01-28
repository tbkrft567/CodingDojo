import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  currentUser: {}

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers(){
    console.log('***INDEX-getUser***')
    let observable = this._httpService.getAllUsersSRV()
    observable.subscribe(data => {
      console.log('***INDEX-UserFound***')
      console.log(data, '******')
    })
    
  }

  logOut(){
    let observable = this._httpService.logoutSRV()
    observable.subscribe(data => {
      console.log(data)
    })
    this.goToRoot()
  }

  getToken(){
    return localStorage.getItem('token')
  }

  goToRoot(){
    this._router.navigate([''])
  }
}
