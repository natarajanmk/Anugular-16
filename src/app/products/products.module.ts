import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule],
  exports: [ProductsComponent],
})
export class ProductModule {}
