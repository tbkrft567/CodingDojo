import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewAuthorsComponent implements OnInit {
  title: string
  newAuthor: {}
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) {
    this.newAuthor = { name: "" }
    this.title = "public"
  }

  ngOnInit() {
    this.newAuthor = { name: "" }
  }
  createAuthor() {
    let observable = this._httpService.createAuthor(this.newAuthor)
    observable.subscribe(data => {
      this.newAuthor = { name: "" }
    })
    this.navToIndex()
  }
  navToIndex(){
    this._router.navigate(['/'])
  }

}
