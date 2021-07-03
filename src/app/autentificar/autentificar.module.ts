import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutentificarPageRoutingModule } from './autentificar-routing.module';

import { AutentificarPage } from './autentificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutentificarPageRoutingModule
  ],
  declarations: [AutentificarPage]
})
export class AutentificarPageModule {}
