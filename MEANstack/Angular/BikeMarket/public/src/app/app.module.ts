import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { ShowCaseComponent } from './show-case/show-case.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowseComponent } from './dashboard/browse/browse.component';
import { MyListComponent } from './dashboard/my-list/my-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { localFunction } from './functions.component'
import { AuthInterceptor } from './auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowCaseComponent,
    LoginRegComponent,
    DashboardComponent,
    BrowseComponent,
    MyListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    localFunction,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
