import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges {
  constructor() {}

  _setterResult = 0;
  @Input() _onChangeResult = 0;
  @Input() _viewResult = 0;

  ngOnInit() {}

  @Input() set setterChange(newvalue: number) {
    this._setterResult = newvalue;
  }

  get setterChange() {
    return this._setterResult;
  }

  ngOnChanges(simpleChanges: any) {
    //console.log(simpleChanges);
    let c = simpleChanges.setterChange;
    this._onChangeResult = c.currentValue;
    // console.log(
    //   'Previous Value: ' + c.previousValue,
    //   ', Current Value:' + c.currentValue,
    //   ', First Change : ' + c.firstChange
    // );
  }
}
