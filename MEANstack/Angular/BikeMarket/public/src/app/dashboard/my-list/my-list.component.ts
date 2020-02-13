import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  currentUser: {}
  myBikes: {}
  newBike: {}
  constructor(
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
    ) { }

  ngOnInit() {
    console.log(window.localStorage)
    this.getCurrentUser()
    this.getAllMyBikes()
    this.newBike = {title: "", description: "", price: "", city: "", state: ""}
  }

  getCurrentUser(){
    let observable = this._http.currentUserSRV()
    observable.subscribe(data => {
      this.currentUser = data
      // console.log("Current User Found")
    })
  }
  getAllMyBikes(){
    let observable = this._http.getAllMyBikesSRV()
    observable.subscribe(data => {
      console.log(data)
      this.myBikes = data["bikes"]
    })
  }
  createBike(){
    let observable = this._http.createBikeSRV(this.newBike)
    observable.subscribe(data => {
      console.log(data)
      this.getAllMyBikes()
    })
  }
  deleteBike(bikeId){
    let observable = this._http.deleteBikeSRV(bikeId)
    observable.subscribe(data =>{
      // console.log(data)
      // this.getAllMyBikes()
    })
  }
  updateBike(bikeId){
    console.log('updated', bikeId)
  }
}
