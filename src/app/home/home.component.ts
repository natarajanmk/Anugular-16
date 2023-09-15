import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { DirectivesModule } from '../_directive/directives';
import { DisplayLoginUser } from '../_model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private grandParent: AppComponent
  ) {
    console.log(grandParent);
  }
  loginInfo: any = null;
  color: string = 'red';
  alertMessage: string = 'welcome custome alert message';
  loginUser: DisplayLoginUser[] = [];

  ngOnInit() {
    this.route.data.subscribe((data) => {
      let result: any[] = data['loginInfo'];
      result.forEach((res) => {
        let result = new DisplayLoginUser(
          res.userId,
          res.userName,
          res.password,
          res.role
        );
        this.loginUser.push(res);
      });
      console.log(this.loginUser);
      //this.loginInfo = JSON.stringify(data['loginInfo']);
    });
  }
}
