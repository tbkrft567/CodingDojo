import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
editProduct: {}
productId: {}
errorMessage: {}
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => { this.productId = params["productId"] })
    this.getProduct(this.productId)
  }

  getProduct(productId){
    let observable = this._httpService.getProductSRV(productId)
    observable.subscribe(data => {
      this.editProduct = data
    })
  }

  updateProduct(){
    let observable = this._httpService.updateProductSRV(this.editProduct)
    observable.subscribe(data => {
      console.log(data)
      this.showErrorMessage(data)
    })
  }
  removeProduct(productId) {
    this.productId = productId
    let observable = this._httpService.removeProductSRV(this.productId)
    observable.subscribe(data => {})
    this.goIndex()
  }

  goIndex() {
    this._router.navigate(['/products', 'index'])
  }
  showErrorMessage(data) {
    if ('errors' in data) {
      this.errorMessage = data["errors"]["title"]
    }
    else {
      this.goIndex()
    }
  }
}
