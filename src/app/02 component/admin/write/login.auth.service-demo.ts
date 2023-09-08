import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RxjsValidation {
  constructor(private httpClient: HttpClient) {}

  users: LoginInfo[] = [
    { userId: 1, userName: 'abc', password: 'abc', role: 'USER' },
    { userId: 2, userName: 'test', password: 'test', role: 'ADMIN' },
  ];

  //Subject declartion
  private _loginSuccess = new Subject<boolean>();

  //Behaviour declaration
  private _loginUserInfo = new BehaviorSubject<LoginInfo | undefined>(
    undefined
  );

  //Observable declaration
  loginSuccess(): Observable<boolean> {
    return this._loginSuccess;
  }

  userLoginInfo(): Observable<LoginInfo | undefined> {
    return this._loginUserInfo;
  }

  login(username: string) {}
}

export class LoginInfo {
  public userId: number = 0;
  public userName: string = '';
  public password: string = '';
  public role: string = '';
}
