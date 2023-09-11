import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicHighlightDirective } from '../_directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  loginInfo: any = null;
  color: string = 'red';
  alertMessage: string = 'welcome custome alert message';

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.loginInfo = JSON.stringify(data['loginInfo']);
    });
  }
}
