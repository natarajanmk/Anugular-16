import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class LoginAuthService {
  constructor() {}
  private isloggedIn: boolean = false;
  private loggedInUser: LoginUser = null;
  private redirectUrl: string = '/';
  private loginUrl: string = 'admin/login';

  loginUserInfo: LoginUser[] = [
    { userId: 1, userName: 'abc', password: 'abc', role: 'USER' },
    { userId: 1, userName: 'test', password: 'test', role: 'ADMIN' },
  ];

  getAllLoginUser(): Observable<LoginUser[]> {
    let loginUsers = new Observable<LoginUser[]>((observer) => {
      observer.next(this.loginUserInfo);
    });
    return loginUsers;
  }

  isValidUser(username: string, password: string): boolean {
    this.isloggedIn = false;
    this.getAllLoginUser().map((users) => {
      this.loggedInUser = users.find((user) => {
        user.userName === username && user.password === password;
      });
    });
    if (this.loggedInUser) {
      this.isloggedIn = true;
    }
    return this.isloggedIn;
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  getRedirectUrl(): string {
    return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getLoggedInUser(): LoginUser {
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
