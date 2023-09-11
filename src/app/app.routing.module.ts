import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './error/error.component';
import { HomeService } from './_services';
import { HighlightDirective } from './_directive';

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
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [HighlightDirective],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
