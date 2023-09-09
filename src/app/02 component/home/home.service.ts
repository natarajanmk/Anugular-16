import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginInfo } from '../admin/login.auth.demo.service';
import { LoginAuthService } from '../admin/login.auth.service';

@Injectable({ providedIn: 'root' })
export class HomeService implements Resolve<LoginInfo[]> {
  constructor(private loginAuthService: LoginAuthService) {}

  testLoginInfo: LoginInfo[] = [];

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<LoginInfo[]> | Promise<LoginInfo[]> | LoginInfo[] {
    let result = this.loginAuthService.getAllLoginUser();
    for (let i = 0; i < 10; i++) {
      this.testLoginInfo.push(result);
    }
    //return this.loginAuthService.getAllLoginUser();
    return this.testLoginInfo;
  }
}
