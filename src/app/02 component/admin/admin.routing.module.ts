import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

import { AdminComponent } from './admin.component';
import { ReadComponent } from './read/read/read.component';
import { SimpleAuthGuardService } from './simple-auth-guard.service';
import { WriteComponent } from './write/write/write.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [SimpleAuthGuardService],
    children: [
      { path: 'read', component: ReadComponent },
      { path: 'write', component: WriteComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
