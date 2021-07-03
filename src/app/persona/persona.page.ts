import { Component, OnInit, OnDestroy } from '@angular/core';
import {Persona} from './persona.model';
import { DatosService } from './datos.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit, OnDestroy {

  persona: Persona[];
  constructor(private datosServicio: DatosService) { }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ionViewWillEnter()
  {
    this.persona=this.datosServicio.getPersonas();
    console.log(this.persona);
    console.log('onViewWillEnter');
  }
  ionViewDidEnter()
  {
    console.log('onViewDidEnter');
  }
  ionViewWillLeave()
  {
    console.log('onViewWillLeave');
  }
  ionViewDidLeave()
  {
    console.log('onViewDidLeave');
  }
  ngOnDestroy()
  {
    console.log('ngOnDestroy')
  }
}
