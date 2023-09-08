import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  loginUserInfo: LoginUser[] = [
    { userId: 1, userName: 'abc', password: 'abc', role: 'USER' },
    { userId: 2, userName: 'test', password: 'test', role: 'ADMIN' },
  ];

  getAllLoginUser1(): Observable<LoginUser[]> {
    return loginUserObservable;
  }

  getAllLoginUser(): Observable<LoginUser[]> {
    return new Observable<LoginUser[]>((observer) => {
      observer.next(this.loginUserInfo);
      observer.complete();
    });
  }

  isValidUser(username: string, password: string): boolean {
    this.isloggedIn = false;

    this.getAllLoginUser1()
      .pipe(
        map((users) => {
          let user = users.find(
            (user) => user.userName === username && user.password === password
          );
          //console.log('find:' + JSON.stringify(user));
          return (this.loggedInUser = user);
        })
      )
      .subscribe((res) => {
        //console.log('find:' + JSON.stringify(this.loggedInUser));
        if (this.loggedInUser) {
          this.loggedInUser = res;
          this.isloggedIn = true;
        }
      });
    return this.isloggedIn;
  }
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
  getLoggedInUser(): LoginUser | undefined {
    return this.loggedInUser;
  }
  logoutUser(): void {
    this.isloggedIn = false;
  }
}

export class LoginUser {
  public userId: number = 0;
  public userName: string = '';
  public password: string = '';
  public role: string = '';
}