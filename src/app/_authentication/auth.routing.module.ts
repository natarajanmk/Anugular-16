import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const authRoutes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
