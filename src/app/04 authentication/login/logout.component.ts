import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/05 auth-service/auth.service';
import { User } from 'src/app/05 auth-service/user';

@Component({
  selector: 'logout',
  template: `Logged In: {{loggedInUser.username}} | {{loggedInUser.role}} | 
              <button input='input' (click)="logout()">Logout</button>
      `,
})
export class LogoutComponent {
  loggedInUser!: User;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
  }
  logout() {
    this.authService.logoutUser();
    this.router.navigate([this.authService.getLoginUrl()]);
  }
}