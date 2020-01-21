import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexAuthorsComponent implements OnInit {
  allAuthors: {}
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthors()
  }
  getAuthors(){
    let observable = this._httpService.getAllAuthors()
    observable.subscribe(authors => {
      console.log(authors)
      this.allAuthors = authors["authors"]
    })
  }
  removeAuthor(id){
    let observable = this._httpService.destroyAuthor(id)
    observable.subscribe()
    this.ngOnInit()
  }
  navToEditAuthor(id){
    this._router.navigate(['/authors/edit/'+id])
  }
}
