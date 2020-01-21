import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-new-authors',
  templateUrl: './new-authors.component.html',
  styleUrls: ['./new-authors.component.css']
})
export class NewAuthorsComponent implements OnInit {
newAuthor: {};
errorMessage: "";
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    // this._route.params.subscribe((params: Params)=>{console.log(params["id"])})
    this.newAuthor = { name: "" }
  }
  createAuthor(){
    console.log('**NEW_AUTHOR-CreateAuthor**')
    let observable = this._httpService.createAuthorSRV(this.newAuthor)
    observable.subscribe(authorConfirm => {
      if("Errors" in authorConfirm){
        this.errorMessage = authorConfirm["Errors"]["errors"]["name"]["message"]
      }
      else{
        this.newAuthor = { name: "" }
        this.goDashboard()
      }
    })

  }
  goDashboard(){
    console.log('**NEW_AUTHOR-navToDashboard**')
    this._router.navigate(['/authors', 'dashboard'])
  }
}
