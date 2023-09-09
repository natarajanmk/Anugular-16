import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { LoginInfo } from '../admin/login.auth.demo.service';
import { LoginAuthService } from '../admin/login.auth.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HomeService implements Resolve<LoginInfo[]> {
  constructor(private loginAuthService: LoginAuthService) {}

  _loginUserInfo = new BehaviorSubject<LoginInfo[] | undefined>(undefined);

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<LoginInfo[]> | Promise<LoginInfo[]> | LoginInfo[] {
    return this.loginAuthService.getAllLoginUser();
  }
}
