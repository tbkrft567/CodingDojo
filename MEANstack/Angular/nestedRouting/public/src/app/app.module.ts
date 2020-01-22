import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';
import { BrandComponent } from './products/brand/brand.component';
import { CategoryComponent } from './products/category/category.component';
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllreviewsComponent } from './reviews/allreviews/allreviews.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    ProductsDetailComponent,
    BrandComponent,
    CategoryComponent,
    ReviewDetailComponent,
    AuthorComponent,
    AllreviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
