import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaPageRoutingModule } from './persona-routing.module';

import { PersonaPage } from './persona.page';

import { TarjetaPersonaComponent } from './tarjeta-persona/tarjeta-persona.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaPageRoutingModule
  ],
  declarations: [PersonaPage, TarjetaPersonaComponent]
})
export class PersonaPageModule {}
