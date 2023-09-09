import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ReadComponent } from './read/read/read.component';
import { WriteComponent } from './write/write/write.component';
import { AdminRoutingModule } from './admin.routing.module';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, ReadComponent, WriteComponent, LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, AdminRoutingModule],
})
export class AdminModule {}
