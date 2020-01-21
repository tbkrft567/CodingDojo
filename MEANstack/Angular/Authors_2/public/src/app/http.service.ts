import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllAuthorsSVR(){
    console.log('***SERVICE-GetAllAuthors***')
    return this._http.get('/authors')
  }
  getAuthorSVR(authorId){
    console.log('***SERVICE-getAuthor***')
    return this._http.get("/authors/"+authorId+"/edit")
  }
  updateAuthorSRV(authorId, author){
    console.log('***SERVICE-UpdateAuthor***')
    return this._http.put("/authors/"+authorId+"/update", author)
  }
  createAuthorSRV(newAuthor){
    console.log('***SERVICE-CreateAuthor***')
    return this._http.post('/authors/create', newAuthor)
  }
  createQuoteSRV(newQuote){
    console.log('***SERVICE-CreateQuote***')
    newQuote = {key: newQuote}
    return this._http.post("/authors/"+newQuote.key.id+"/quotes/create", newQuote)
  }
  removeQuoteSRV(IDs){
    console.log('***SERVICE-RemoveQuote***')
    return this._http.delete("/authors/"+IDs.authorId+"/quotes/"+IDs.quoteId+"/destroy")
  }
  getAuthorAllQuotesSRV(authorId){
    console.log('***SERVICE-GetAllQuotes***')
    return this._http.get('/quotes/'+authorId)
  }
  removeAuthorSRV(authorId){
    console.log('***SERVICE-removeAuthor***')
    return this._http.delete("/authors/"+authorId+"/destroy")
  }
  VoteSRV(voteOptions){
    console.log('***SERVICE-Vote***')
    return this._http.post("/authors/"+voteOptions.authorId+"/quotes/vote", voteOptions)
  }
}
