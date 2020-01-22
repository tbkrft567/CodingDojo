import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newProduct: {};
  errorMessage: {}

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newProduct = { title: "", price: "", imageURL: "" }
  }
  createProduct() {

    let observable = this._httpService.createProductSRV(this.newProduct)
    observable.subscribe(data => {
      this.showErrorMessage(data)
    })
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
