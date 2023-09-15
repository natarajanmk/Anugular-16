import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}
  p_setterResult = 0;

  ngOnInit() {}

  update() {
    return (this.p_setterResult += 1);
  }
  ViewUpdate() {}
}
