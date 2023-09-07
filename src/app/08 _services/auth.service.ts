import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimpleAuthService {
  private loggedInStatus = JSON.parse(
    localStorage.getItem('loggedIn') || 'false'
  );

  setLoginStatus(value) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get LoginStatus() {
    return JSON.parse(
      localStorage.getItem('loggedIn') || this.loggedInStatus.toString()
    );
  }

  sinUpUser(username: string, password: string) {
    this.setLoginStatus(true);
    return this.LoginStatus();
    //return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  logInUser(username: string, password: string) {
    setLoginStatus(true);
    return LoginStatus();
    //return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}
