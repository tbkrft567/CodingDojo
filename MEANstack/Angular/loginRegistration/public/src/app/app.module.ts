import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './barrel.http';
import { AuthService } from './auth.service'
import { AuthInterceptor } from './auth-interceptor'

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    HttpClient,
    httpInterceptorProviders,
    AuthService, 
    AuthInterceptor,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
