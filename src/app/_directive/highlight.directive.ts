/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
  // @Input() defaultColor: string = '';

  // @Input('appHighlight') highlightColor: string = '';

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.highlightColor || this.defaultColor || 'red');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
