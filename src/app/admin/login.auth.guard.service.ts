import { Injectable } from '@angular/core';
import { LoginAuthService, LoginUser } from './login.auth.service';
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginAuthGuardService implements CanActivate, CanActivateChild {
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
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isAdminUser = true;
    var path = route.routeConfig?.path;
    let user: LoginUser | undefined = this.loginAuthService.getLoggedInUser();
    if (user?.role === 'USER' && (path === 'read' || path === null)) {
      isAdminUser = false;
      alert('you are not authorized');
    }
    return isAdminUser;
  }
}