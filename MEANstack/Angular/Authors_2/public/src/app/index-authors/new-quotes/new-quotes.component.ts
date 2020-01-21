import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-new-quotes',
  templateUrl: './new-quotes.component.html',
  styleUrls: ['./new-quotes.component.css']
})
export class NewQuotesComponent implements OnInit {
  newQuote = {};
  authorId: string
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => { this.authorId = params["authorId"] })
    this.newQuote = { content: "", vote: 0 }
  }
  createQuote(authorId) {
    this.authorId = authorId
    console.log(this.authorId)
    this.newQuote = { content: this.newQuote["content"], vote: 0, id: this.authorId }
    let observable = this._httpService.createQuoteSRV(this.newQuote)
    observable.subscribe(data => {})
    this.newQuote = { content: "" }
    this.goToQuoteDashboard()
  }
  goToQuoteDashboard(){
    console.log('**QUOTES-navToQuoteDashboard**')
    this._router.navigate(['/authors', this.authorId , 'quotes'])
  }
}
