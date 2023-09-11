import { Injectable } from '@angular/core';

import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginAuthService } from './login.auth.service';

@Injectable({ providedIn: 'root' })
export class LoginAuthGuardService implements CanActivate, CanActivateChild {
  constructor(
    private loginAuthService: LoginAuthService,
    private router: Router
  ) {}

  user: any;

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

    this.loginAuthService.getLoggedInUser().subscribe((res) => {
      this.user = res;
    });

    if (this.user?.role === 'USER' && (path === 'read' || path === null)) {
      isAdminUser = false;
      alert('you are not authorized');
    }
    return isAdminUser;
  }
}
