import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { LoginUser } from '../_model/user';

@Injectable({
  providedIn: 'root',
})
export class LoginSharedService {
  constructor() {}

  private _loggedInUserName = new BehaviorSubject<string>('');
  loggedInUserName = this._loggedInUserName.asObservable();

  //private _loggedInUser = new BehaviorSubject<LoginUser | undefined>(undefined);
  private _loggedInUser = new BehaviorSubject<any>(null);
  loggedInUser = this._loggedInUser.asObservable();

  updateLoggedUserName(username: string) {
    this._loggedInUserName.next(username);
  }
  updateLoggedInUser(user: any) {
    this._loggedInUser.next(user);
  }
}
