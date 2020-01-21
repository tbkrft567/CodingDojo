import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './http.service'
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexAuthorsComponent } from './index/index.component';
import { NewAuthorsComponent } from './new/new.component';
import { EditAuthorsComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexAuthorsComponent,
    NewAuthorsComponent,
    EditAuthorsComponent
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
