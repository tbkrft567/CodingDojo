import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index-authors',
  templateUrl: './index-authors.component.html',
  styleUrls: ['./index-authors.component.css']
})
export class IndexAuthorsComponent implements OnInit {

  constructor(         
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    // this._route.params.subscribe((params: Params)=>{console.log(params["id"])}) 
  }
  goHome(){
    this._router.navigate(['/authors'])
  }
}
