import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-index-quotes',
  templateUrl: './index-quotes.component.html',
  styleUrls: ['./index-quotes.component.css']
})
export class IndexQuotesComponent implements OnInit {
  author: {};
  IDs: {}
  authorId: string;
  vote: {}
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => { this.authorId = params["authorId"] })
    this.getAuthorAllQuotes(this.authorId)
  }
  getAuthorAllQuotes(authorId) {
    this.authorId = authorId
    let observable = this._httpService.getAuthorAllQuotesSRV(this.authorId)
    observable.subscribe(data => {
      // console.log(data)
      this.author = data
    })
  }
  removeQuote(IDs){
    this.IDs = IDs
    let observable = this._httpService.removeQuoteSRV(this.IDs)
    observable.subscribe(data => {})
    this.getAuthorAllQuotes(this.authorId)
  }
  Vote(voteOptions) {
    this.vote = voteOptions
    // console.log(this.vote)
    let observable = this._httpService.VoteSRV(this.vote)
    observable.subscribe(data => {})
    this.getAuthorAllQuotes(this.authorId)
  }
}
