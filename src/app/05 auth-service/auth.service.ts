import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

import { User } from './user';

const USERS = [
  new User(1, 'abc', 'abc', 'USER'),
  new User(1, 'test', 'test', 'ADMIN'),
];

var userObservable = Observable.of(USERS);

@Injectable()
export class AuthService {
  private redirectUrl: string = '/';
  private loginUrl: string = '/login';
  private isloggedIn: boolean = false;
  private loggedInUser: any;
  //private loggedInUser: User;

  constructor() {}

  getAllUsers(): Observable<User[]> {
    return userObservable;
  }
  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    return this.getAllUsers().map((users) => {
      let user = users.find(
        (user) => user.userName === username && user.password === password
      );
      if (user) {
        this.isloggedIn = true;
        this.loggedInUser = user;
      } else {
        this.isloggedIn = false;
      }
      return this.isloggedIn;
    });
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
  getLoggedInUser(): User {
    return this.loggedInUser;
  }
  logoutUser(): void {
    this.isloggedIn = false;
  }
}
