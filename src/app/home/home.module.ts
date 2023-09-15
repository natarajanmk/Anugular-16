import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { DirectivesModule } from '../_directive/directives';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, DirectivesModule],
})
export class HomeModule {}
