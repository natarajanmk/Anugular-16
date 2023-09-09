import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginSharedService {
  constructor() {}

  private _loggedInUserName = new BehaviorSubject<string>('');
  loggedInUserName = this._loggedInUserName.asObservable();

  updateLoggedUserName(username: string) {
    this._loggedInUserName.next(username);
  }
}
