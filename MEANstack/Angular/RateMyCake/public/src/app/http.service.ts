import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}
  getAllCakes(){
    return this._http.get('/cakes')
  }
  getAllReviews(){
    return this._http.get('/reviews')
  }
  createCake(newCake){
    return this._http.post('/cakes/create', newCake)
  }
  createReview(newReview, cakeId){
    console.log(newReview)
    return this._http.post('/reviews/create/'+cakeId, newReview)
  }

}
