import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAuthService } from './admin/login.auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginAuthService: LoginAuthService,
    private router: Router
  ) {}

  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.email]),
      }),
    });
  }

  onFormSubmit() {
    //let uname = this.loginForm..userData.username;
    //let pwd = this.loginForm.get('password');
  }
}
