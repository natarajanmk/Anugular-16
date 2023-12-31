import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { LoginUser } from '../_model';

const loginUserInfo: LoginUser[] = [
  { userId: 1, userName: 'abc', password: 'abc', role: 'USER' },
  { userId: 2, userName: 'test', password: 'test', role: 'ADMIN' },
];

const loginUserObservable: Observable<LoginUser[]> = of(loginUserInfo);

@Injectable({ providedIn: 'root' })
export class LoginAuthService {
  constructor() {}
  private isloggedIn: boolean = false;
  private loggedInUser: LoginUser | undefined;
  private redirectUrl: string = '/';
  private loginUrl: string = '/login';

  private _loggedInUserInfo = new Subject<LoginUser>();

  //Subject declartion
  private _loginSuccess = new Subject<boolean>();

  //Behaviour declaration
  private _loginUserInfo = new BehaviorSubject<any>(null);

  test: LoginUser[] = [
    { userId: 1, userName: 'abc', password: 'abc', role: 'USER' },
    { userId: 2, userName: 'test', password: 'test', role: 'ADMIN' },
  ];

  isLoginSuccess(): Observable<boolean> {
    return this._loginSuccess;
  }

  userLoginInfo(): Observable<LoginUser> {
    return this._loginUserInfo;
  }

  getAllLoginUser1(): Observable<LoginUser[]> {
    return loginUserObservable;
  }

  getAllLoginUser(): Observable<LoginUser[]> {
    return new Observable<LoginUser[]>((observer) => {
      observer.next(this.test);
      observer.complete();
    });
  }

  isValidUser(username: string, password: string): boolean {
    this._loginSuccess.next(false);
    this.isloggedIn = false;

    this.getAllLoginUser1()
      .pipe(
        map((users) => {
          let user = users.find(
            (user) => user.userName === username && user.password === password
          );
          //console.log('find1:' + JSON.stringify(user));
          return (this.loggedInUser = user);
        })
      )
      .subscribe({
        next: (data) => {
          //this._loginSuccess.next(true);
          this.isloggedIn = true;
          this._loginUserInfo.next(data);
          //console.log('find2:' + JSON.stringify(this._loginUserInfo));
        },
        error: () => {
          this._loginSuccess.next(false);
        },
      });
    return this.isloggedIn;
  }

  /*
  loginValidation(username: string, password: string): Observable<boolean> {
    this._loginSuccess.next(false);

    this.getAllLoginUser1()
      .pipe(
        map((users) => {
          let user = users.find(
            (user) => user.userName === username && user.password === password
          );
          return (this.loggedInUser = user);
        })
      )
      .subscribe({
        next: (data) => {
          this._loginSuccess.next(true);
          this._loginUserInfo.next(data);
        },
        error: () => {
          this._loginSuccess.next(false);
        },
      });
    return this._loginSuccess;
  }
*/
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  getRedirectUrl(): string {
    return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
    this.redirectUrl = url + this.loginUrl;
  }
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getLoggedInUser(): Observable<LoginUser> {
    return this._loginUserInfo;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}
