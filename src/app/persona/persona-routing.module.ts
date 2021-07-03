import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaPage } from './persona.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaPage
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./tarjeta-persona/nueva-tarjeta/nueva-tarjeta.module').then( m => m.NuevaTarjetaPageModule)
  },
  {
    path: 'vista',
    loadChildren: () => import('./tarjeta-persona/vista-tarjeta/vista-tarjeta.module').then( m => m.VistaTarjetaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaPageRoutingModule {}
