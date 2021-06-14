import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authToken = '';
    if(localStorage.getItem('accountFE62')){
      const user = JSON.parse(localStorage.getItem('accountFE62') as string);
      authToken = `Bearer ${user.accessToken}`;
    }

    const authReq = request.clone({
      headers: request.headers.set('Authorization', authToken)
    })

    console.log("access token ", authReq);
    return next.handle(authReq);
  }
}
