import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { Router } from '@angular/router';

import { LoginUser } from '../_model/user';
import { LoginAuthService, LoginSharedService } from '../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loggedUser: any;

  constructor(
    private loginAuthService: LoginAuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginSharedService: LoginSharedService
  ) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
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
      }
      // {
      //   validators: [Validation.match('password', 'confirmPassword')],
      // }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onFormSubmit() {
    //console.log(JSON.stringify(this.loginForm.value, null, 2));
    if (
      this.loginAuthService.isValidUser(
        this.loginForm.value.username,
        this.loginForm.value.password
      )
    ) {
      this.loginSharedService.updateLoggedUserName(
        this.loginForm.value.username
      );

      this.loginAuthService.getLoggedInUser().subscribe((res) => {
        this.loggedUser = res;
      });

      this.loginSharedService.updateLoggedInUser(this.loggedUser);

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
