import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ProductsComponent],
  imports: [BrowserModule, ProductsComponent],
})
export class ProductModule {}
