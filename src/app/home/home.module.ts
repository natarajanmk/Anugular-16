import {
  NgModule 
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { DirectivesModule } from '../_directive/directives';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, DirectivesModule],
})
export class HomeModule {}
