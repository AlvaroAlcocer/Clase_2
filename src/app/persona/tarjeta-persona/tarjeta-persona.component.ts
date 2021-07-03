import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-tarjeta-persona',
  templateUrl: './tarjeta-persona.component.html',
  styleUrls: ['./tarjeta-persona.component.scss'],
})
export class TarjetaPersonaComponent implements OnInit {

  @Input() tarjetaPersonal: Persona;

  constructor() { }

  ngOnInit() {}

}
