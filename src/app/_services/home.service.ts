import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

import { LoginUser } from '../_model';
import { LoginAuthService } from './login.auth.service';

@Injectable({ providedIn: 'root' })
export class HomeService implements Resolve<LoginUser[]> {
  constructor(private loginAuthService: LoginAuthService) {}

  _loginUserInfo = new BehaviorSubject<LoginUser[] | undefined>(undefined);

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<LoginUser[]> | Promise<LoginUser[]> | LoginUser[] {
    return this.loginAuthService.getAllLoginUser();
  }
}
