import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

import { LoginUser } from '../_model';

@Injectable({ providedIn: 'root' })
export class RxjsValidation {
  constructor(private httpClient: HttpClient) {}

  users: LoginUser[] = [
    { userId: 1, userName: 'abc', password: 'abc', role: 'USER' },
    { userId: 2, userName: 'test', password: 'test', role: 'ADMIN' },
  ];

  //Subject declartion
  private _loginSuccess = new Subject<boolean>();

  //Behaviour declaration
  private _loginUserInfo = new BehaviorSubject<LoginUser | undefined>(
    undefined
  );

  private _loggedUserInfo = new Subject<LoginUser>();

  //Observable declaration
  loginSuccess(): Observable<boolean> {
    return this._loginSuccess;
  }

  userLoginInfo(): Observable<LoginUser | undefined> {
    return this._loginUserInfo;
  }

  getLoggedInUserInfo(): Observable<LoginUser> {
    return this._loggedUserInfo;
  }

  login(username: string) {
    this.httpClient.post<LoginUser>('', null).subscribe({
      next: (data) => {
        this._loginSuccess.next(true);
        this._loginUserInfo.next(data);
        this._loggedUserInfo.next(data);
      },
      error: () => {
        this._loginSuccess.next(false);
      },
    });
  }
}
