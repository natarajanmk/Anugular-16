import { Component, OnInit } from '@angular/core';
import { LoginSharedService } from '../services/login.shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private loginSharedService: LoginSharedService) {}
  public isCollapsed = true;
  loggedInName: string = '';

  ngOnInit() {
    this.loginSharedService.loggedInUserName.subscribe((res) => {
      this.loggedInName = res;
    });
  }
}
