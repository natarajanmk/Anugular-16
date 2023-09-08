import { Injectable } from '@angular/core';
import { LoginAuthService } from './login.auth.service';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginAuthGuardService implements CanActivate {
  constructor(
    private loginAuthService: LoginAuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    //console.log('Url:' + url);

    if (this.loginAuthService.isUserLoggedIn()) {
      return true;
    }
    this.loginAuthService.setRedirectUrl(url);
    this.router.navigate([this.loginAuthService.getRedirectUrl()]);
    //this.router.navigate(['admin/login']);
    return false;
  }
}
