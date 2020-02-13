import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
allBikes: {}
currentUser: {}
allUsers: {}
  constructor(
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log(window.localStorage)
    // this.getAllBikes()
    this.getCurrentUser()
    this.getAllUsers()
  }
  getAllBikes(){
    let observable = this._http.allBikesSRV()
    observable.subscribe(data => {
      this.allBikes = data["Bikes"]
    })
  }
  getAllUsers(){
    let observable = this._http.getAllUsersSRV()
    observable.subscribe(data =>{
      this.allUsers = data["Users"]
      this.assignUserToBike(this.allUsers)
    })
  }
  getCurrentUser(){
    let observable = this._http.currentUserSRV()
    observable.subscribe(data => {
      this.currentUser = data
      console.log(this.currentUser)
    })
  }
  assignUserToBike(allUsers){
    let assignedBikes = {bikes: []}
    for(let user = 0; user < allUsers.length; user++ ){
      let userId = allUsers[user]["_id"]
      console.log(allUsers[user]["bikes"], "help")
      for(let i = 0; i < allUsers[user]["bikes"].length; i++){
        assignedBikes["bikes"].push(allUsers[user]["bikes"][i])
        let lastEntry = assignedBikes["bikes"].length-1
        assignedBikes["bikes"][lastEntry]["userId"] = userId
      }
    }
    this.allBikes = assignedBikes["bikes"]
  }
}

