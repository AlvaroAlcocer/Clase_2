import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutentificarPage } from './autentificar.page';

const routes: Routes = [
  {
    path: '',
    component: AutentificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutentificarPageRoutingModule {}
