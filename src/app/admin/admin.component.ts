import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../_model/user';
import { LoginSharedService } from '../_services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private loginSharedService: LoginSharedService) {}
  loggedUserRole: string = '';

  ngOnInit() {
    this.loginSharedService.loggedInUser
      .pipe(
        map((res: LoginUser) => {
          return res;
        })
      )
      .subscribe((res) => {
        this.loggedUserRole = res.role;
      });

    // this.loginSharedService.loggedInUser.subscribe((res) => {
    //   debugger;
    //   this.loggedUserInfo = res;
    //   //console.log(JSON.stringify(this.loggedUserInfo));
    // });
  }
}
