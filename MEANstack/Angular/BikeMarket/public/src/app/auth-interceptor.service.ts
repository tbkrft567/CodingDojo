import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   
   
   constructor() { }
   
   
   intercept(req: HttpRequest<any>, next: HttpHandler) {
      console.log('INTERPRETOR RUN')
      const authToken = window.localStorage.getItem('token')
      const authReq = req.clone({
         headers: req.headers.set('Authorization', `bearer ${authToken}`)
      })
      return next.handle(authReq)
   }
}