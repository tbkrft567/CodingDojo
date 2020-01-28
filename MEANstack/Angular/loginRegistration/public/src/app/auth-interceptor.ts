import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   
   
   constructor(private auth: AuthService) { }
   
   
   intercept(req: HttpRequest<any>, next: HttpHandler) {
      console.log('INTERPRETOR RUN')
      const authToken = this.auth.getToken()
      const authReq = req.clone({
         headers: req.headers.set('Authorization', `bearer ${authToken}`)
      })
      return next.handle(authReq)
   }
}