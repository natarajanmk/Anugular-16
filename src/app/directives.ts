import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicHighlightDirective } from './_directive';

export const DIRECTIVES = [BasicHighlightDirective];

@NgModule({
  imports: [CommonModule],
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule {}
