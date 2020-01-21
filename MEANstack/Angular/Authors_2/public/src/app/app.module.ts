import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexAuthorsComponent } from './index-authors/index-authors.component';
import { IndexQuotesComponent } from './index-authors/index-quotes/index-quotes.component';
import { NewAuthorsComponent } from './index-authors/new-authors/new-authors.component';
import { EditAuthorsComponent } from './index-authors/edit-authors/edit-authors.component';
import { NewQuotesComponent } from './index-authors/new-quotes/new-quotes.component';
import { DashboardAuthorComponent } from './index-authors/dashboard-author/dashboard-author.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexAuthorsComponent,
    EditAuthorsComponent,
    NewAuthorsComponent,
    NewQuotesComponent,
    IndexQuotesComponent,
    DashboardAuthorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
