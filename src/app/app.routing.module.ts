import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './02 component/home/home.component';
import { ContactUsComponent } from './02 component/contact-us/contact-us.component';
import { AboutUsComponent } from './02 component/about-us/about-us.component';
import { ProductsComponent } from './02 component/products/products.component';
import { ErrorComponent } from './02 component/error/error.component';
import { HomeService } from './02 component/home/home.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { loginInfo: HomeService },
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: { loginInfo: HomeService },
  },
  { path: 'products', component: ProductsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./02 component/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
