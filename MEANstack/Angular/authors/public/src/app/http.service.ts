import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient ) { }

  getAllAuthors(){
    return this._http.get('/authors')
  }
  showAuthor(authorId){
    return this._http.get("/authors/show/"+authorId)
  }
  createAuthor(newAuthor){
    return this._http.post('/authors/create', newAuthor)
  }
  updateAuthor(updateAuthor){
    return this._http.post('/authors/update', updateAuthor)
  }
  destroyAuthor(authorId){
    return this._http.delete("/authors/destroy/"+authorId)
  }


}
