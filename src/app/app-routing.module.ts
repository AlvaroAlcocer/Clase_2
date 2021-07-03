import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'persona',
    pathMatch: 'full'
  },
  {
    path: 'persona',
    children:
    [
      {
        path:'',
        loadChildren: () => import('./persona/persona.module').then( m => m.PersonaPageModule)
      },
      {
        path:':idpersona',
        loadChildren: () => import('./persona/datos/datos.module').then( m => m.DatosPageModule)
      },
    ]
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./persona/tarjeta-persona/nueva-tarjeta/nueva-tarjeta.module').then( m => m.NuevaTarjetaPageModule)
  },
  {
    path: 'vista',
    loadChildren: () => import('./persona/tarjeta-persona/vista-tarjeta/vista-tarjeta.module').then( m => m.VistaTarjetaPageModule)
  },
  {
    path: 'autentificar',
    loadChildren: () => import('./autentificar/autentificar.module').then( m => m.AutentificarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
