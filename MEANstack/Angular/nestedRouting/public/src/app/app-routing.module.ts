import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { ReviewsComponent } from './reviews/reviews.component'
import { ReviewsComponent } from './reviews/reviews.component'
import { ReviewsComponent } from './reviews/reviews.component'
import { ReviewsComponent } from './reviews/reviews.component'


const routes: Routes = [
  {  path: 'products', component: ProductsComponent, children: [
      { path: 'details/:id', component: ProductsDetailComponent },
      { path: 'brand/:brand', component: BrandComponent },
      { path: 'category/:cat', component: CategoryComponent },
    ]
  },
  {
    path: 'reviews', component: ReviewsComponent, children: [
      { path: 'details/:id', component: ReviewDetailComponent },
      { path: 'author/:id', component: AuhtorComponent },
      { path: 'all/:id', component: AllreviewsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
