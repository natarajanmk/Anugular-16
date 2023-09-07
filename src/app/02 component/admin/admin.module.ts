import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ReadComponent } from './read/read/read.component';
import { WriteComponent } from './write/write/write.component';
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  declarations: [AdminComponent, ReadComponent, WriteComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
