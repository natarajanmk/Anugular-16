import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ReadComponent } from './read/read/read.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
