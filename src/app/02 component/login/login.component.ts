import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SimpleAuthService } from '../08 _services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: SimpleAuthService, private router: Router) {}

  loginForm!: FormGroup;

  ngOnInit() {
    console.log('login component');
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
