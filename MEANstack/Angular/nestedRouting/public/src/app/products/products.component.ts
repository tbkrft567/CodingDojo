import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

}



// Parent parameters
// At some point, it may be necessary to read a parameter from the parent route. Activated Route looks at new parameters, not the parent parameters, unless told otherwise. To access the parent parameters, simply use the
// attribute .parent. For example, imagine we want to route to current sales that are happening after a user selects a particular product. Assuming we have a Sale Component that has a parent route with the id of the product, // we would need that id from the parent route. Here is how that would look:

export class SaleComponent implements OnInit {
  constructor(private _route: ActivatedRoute){}
  ngOnInit(){
         // note the use of .parent
      this._route.parent.params.subscribe(params => console.log(`The parent params: ${params}`))
  }
}
