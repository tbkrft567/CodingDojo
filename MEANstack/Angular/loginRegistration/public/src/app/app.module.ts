import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
// import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
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
    // HttpModule, 
    HttpClientModule,
    FormsModule,
    // local_storage,
    AppRoutingModule,
  ],
  providers: [
    httpInterceptorProviders,
    AuthService, 
    AuthInterceptor,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
