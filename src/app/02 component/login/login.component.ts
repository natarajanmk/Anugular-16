import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAuthService } from '../admin/login.auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginAuthService: LoginAuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          //Validators.minLength(6),
          //Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          //Validators.minLength(6),
          //Validators.maxLength(40),
        ],
      ],
    });
  }

  onFormSubmit() {
    //console.log(JSON.stringify(this.loginForm.value, null, 2));
    if (
      this.loginAuthService.isValidUser(
        this.loginForm.value.username,
        this.loginForm.value.password
      )
    ) {
      console.log('valid user');
      this.router.navigate(['/admin']);
    } else {
      console.log('in-valid user');
    }
  }
  onReset(): void {
    this.loginForm.reset();
  }
}
