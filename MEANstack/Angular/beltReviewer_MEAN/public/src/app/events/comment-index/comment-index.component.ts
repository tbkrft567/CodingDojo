import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-comment-index',
  templateUrl: './comment-index.component.html',
  styleUrls: ['./comment-index.component.css']
})
export class CommentIndexComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
  }

}
