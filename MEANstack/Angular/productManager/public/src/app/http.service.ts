import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient ) { }
  getAllProductsSRV(){
    return this._http.get('/products/index')
  }
  
  createProductSRV(newProduct){
    return this._http.post('/products/create', newProduct)
  }

  getProductSRV(productId){
    console.log(productId)
    return this._http.get("/products/"+productId+"/show")
  }

  updateProductSRV(editProduct){
    return this._http.post("/products/update", editProduct)
  }
  removeProductSRV(productId){
    console.log(productId)
    return this._http.delete("/products/"+productId+"/destroy")
  }
  disableOptionSRV(disableOption){
    return this._http.post("/products/disable/update", disableOption)
  }
}
