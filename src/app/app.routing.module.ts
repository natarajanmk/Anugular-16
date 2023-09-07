import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './02 component/home/home.component';
import { ContactUsComponent } from './02 component/contact-us/contact-us.component';
import { AboutUsComponent } from './02 component/about-us/about-us.component';
import { ProductsComponent } from './02 component/products/products.component';
import { ErrorComponent } from './02 component/error/error.component';
import { AuthGuardService } from './05 auth-service/auth-guard.service';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [AuthGuardService],
  //   children: [
  //     { path: 'products', component: ProductsComponent },
  //     { path: 'about-us', component: AboutUsComponent },
  //     { path: 'contact-us', component: ContactUsComponent },
  //   ],
  // },
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
