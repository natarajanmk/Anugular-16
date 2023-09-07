import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalidCredentialMsg: string | undefined;
  constructor(private authService: AuthService, private router: Router) {}

  loginForm: FormGroup | undefined;

  ngOnInit() {
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, [
          Validators.required,
          Validators.email,
        ]),
      }),
    });
  }

  onFormSubmit() {
    //let uname = this.loginForm..userData.username;
    //let pwd = this.loginForm.get('password');
    this.authService
      .isUserAuthenticated('test', 'test')
      .subscribe((authenticated) => {
        if (authenticated) {
          let url = this.authService.getRedirectUrl();
          console.log('Redirect Url:' + url);
          this.router.navigate([url]);
        } else {
          this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
        }
      });
  }
}
