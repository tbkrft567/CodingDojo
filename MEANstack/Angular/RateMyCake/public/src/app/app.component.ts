import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String;
  newCake: {}
  newReview: {}
  allCakes: {}
  allReviews: {}
  rootForm: any;

  constructor(private _httpService: HttpService) {
    this.title = 'app';
    this.rootForm = new FormGroup({ rating: new FormControl(), comment: new FormControl() })
    this.newCake = { name: "", imageURL: "", description: "" }
    this.newReview = { rating: "", comment: "" }
    this.getAllCakesFromService()
    this.getAllReviewsFromService()
  }
  ngOnInit() {
    this.getAllCakesFromService()
  }
  getAllCakesFromService() {
    let observable = this._httpService.getAllCakes()
    observable.subscribe(allCakes => {
      this.allCakes = allCakes["cakes"]
    })
  }
  getAllReviewsFromService() {
    let observable = this._httpService.getAllReviews()
    observable.subscribe(allReviews => {
      this.allReviews = allReviews["reviews"]
    })
  }
  sendToServiceCreateCake(): void {
    let observable = this._httpService.createCake(this.newCake)
    observable.subscribe(newCakeConfirm => {
      this.newCake = { name: "", imageURL: "", description: "" }
    })
    this.getAllCakesFromService()
  }
  sendToServiceCreateReview(id): void {
    let observable = this._httpService.createReview(this.newReview, id)
    observable.subscribe(newReviewConfirm => {
      this.newReview = { rating: "", comment: "" }
    })
    this.getAllCakesFromService()
  }
}

