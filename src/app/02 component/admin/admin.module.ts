import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ReadComponent } from './read/read/read.component';
import { WriteComponent } from './write/write/write.component';
import { AdminRoutingModule } from './admin.routing.module';
import { LoginComponent } from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AdminComponent, ReadComponent, WriteComponent, LoginComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
