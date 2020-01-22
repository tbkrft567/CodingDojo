import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  allProducts: {};
  productId: {};
  disableOption: {};
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllProducts()
  }
  getAllProducts() {
    let observerable = this._httpService.getAllProductsSRV()
    observerable.subscribe(data => {
      this.allProducts = data["products"]
    })
  }
  removeProduct(productId) {
    this.productId = productId
    let observable = this._httpService.removeProductSRV(this.productId)
    observable.subscribe(data => {
      console.log(data)
    })
    this.getAllProducts()
  }
  disableButton(option) {
    this.disableOption = option
    let observable = this._httpService.disableOptionSRV(this.disableOption)
    observable.subscribe(data => {
      console.log(data)
    })
    this.getAllProducts()
  }
  sayHi(){
    console.log("Hi")
  }
}
