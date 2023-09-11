import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  loginInfo: any = null;
  color: string = '';
  alertMessage: string = 'welcome custome alert message';

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.loginInfo = JSON.stringify(data['loginInfo']);
    });
  }
}
