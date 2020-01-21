import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-dashboard-author',
  templateUrl: './dashboard-author.component.html',
  styleUrls: ['./dashboard-author.component.css']
})
export class DashboardAuthorComponent implements OnInit {
authors: {}
authorId: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.getAllAuthors()
  }
  getAllAuthors(){
    console.log('**DASHBOARD_AUTHOR-GetAllAuthors**')
    let observable  = this._httpService.getAllAuthorsSVR()
    observable.subscribe(data => {
      this.authors = data['authors']
    })
  }
  removeAuthor(authorId){
    console.log('**DASHBOARD_AUTHOR-removeAuthor**')
    this.authorId = authorId
    let observable = this._httpService.removeAuthorSRV(this.authorId)
    observable.subscribe(data => {
      console.log(data)
    })
    this.getAllAuthors()
  }
}
