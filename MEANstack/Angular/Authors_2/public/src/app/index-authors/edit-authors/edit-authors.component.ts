import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-edit-authors',
  templateUrl: './edit-authors.component.html',
  styleUrls: ['./edit-authors.component.css']
})
export class EditAuthorsComponent implements OnInit {
  authorId: string;
  author: {}
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {  this.authorId = params["authorId"] })
    this.getAuthor(this.authorId)
  }
  getAuthor(authorId) {
    console.log('**EDIT_AUTHOR-EditAuthor**')
    this.authorId = authorId
    let observable = this._httpService.getAuthorSVR(this.authorId)
    observable.subscribe(data => {
      this.author = data
    })
  }
  updateAuthor(authorId){
    console.log('**UPDATE_AUTHOR-UpdateAuthor**')
    this.authorId = authorId
    let observable = this._httpService.updateAuthorSRV(this.authorId, this.author)
    observable.subscribe(data => {})
    this.navToDashboard()
  }
  navToDashboard(){
    console.log('**EDIT_AUTHOR-navToDashboard**')
    this._router.navigate(['/authors', 'dashboard'])
  }
}