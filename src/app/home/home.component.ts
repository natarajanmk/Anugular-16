import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { DirectivesModule } from '../_directive/directives';

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

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.loginInfo = JSON.stringify(data['loginInfo']);
    });
  }
}
