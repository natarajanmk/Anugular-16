import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginAuthService } from '../_services/login.auth.service';
import { environment } from '../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private loginAuthService: LoginAuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.loginAuthService.getLoggedInUser();
    const userLoggedIn = this.loginAuthService.isUserLoggedIn();
    const isApiUrl = request.url.startsWith(environment.apiUrl);

    //let currentuser = localStorage.getItem('currentUser');
    // add authorization header with jwt token if available
    //let currentUser = JSON.parse(currentuser);

    //if (currentUser && currentUser.token) {
    if (userLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
