import { Component, OnInit } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { cilListNumbered, cilPaperPlane, brandSet } from '@coreui/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public iconSet: IconSetService) {
    iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet };
  }

  ngOnInit() {}
}
