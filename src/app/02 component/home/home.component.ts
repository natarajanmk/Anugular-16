import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  loginInfo: any = null;

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.loginInfo = JSON.stringify(data['loginInfo']);
    });
  }
}
