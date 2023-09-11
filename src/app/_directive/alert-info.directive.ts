import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlertInfo]',
})
export class AlertInfoDirective {
  @Input() message: string = '';

  @HostListener('click') onClickHandler() {
    alert(this.message);
  }
}
