import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

import { User } from './user';

const USERS = [
  new User(1, 'abc', 'abc', 'USER'),
  new User(1, 'test', 'test', 'ADMIN'),
];

var userObservable = of(USERS);

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

  isUserAuthenticated(username: string, password: string): boolean {
    return this.isloggedIn;
    //this.getAllUsers().map((users) => {
    //   let user = users.find(
    //     (user) => user.userName === username && user.password === password
    //   );
    //   if (user) {
    //     this.isloggedIn = true;
    //     this.loggedInUser = user;
    //   } else {
    //     this.isloggedIn = false;
    //   }
    //   return this.isloggedIn;
    // });
    // return false;
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
