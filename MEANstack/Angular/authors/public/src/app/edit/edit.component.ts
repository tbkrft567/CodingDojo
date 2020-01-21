import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditAuthorsComponent implements OnInit {
  showAuthor: {}
  authorId: any
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => { this.authorId = params.id })
    // console.log(this.authorId)

    this.getAuthor(this.authorId)
  }
  getAuthor(authorId) {
    let observable = this._httpService.showAuthor(authorId)
    observable.subscribe(author => {
      this.showAuthor = author
    })
  }
  updateAuthor() {
    let observable = this._httpService.updateAuthor(this.showAuthor)
    observable.subscribe(updateConfirm => {})
    this.navToIndex()
  }
  navToIndex() {
    this._router.navigate(['/'])
  }
}
