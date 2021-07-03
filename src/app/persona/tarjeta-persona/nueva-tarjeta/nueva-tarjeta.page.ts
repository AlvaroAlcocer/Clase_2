import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosService } from '../../datos.service';

@Component({
  selector: 'app-nueva-tarjeta',
  templateUrl: './nueva-tarjeta.page.html',
  styleUrls: ['./nueva-tarjeta.page.scss'],
})
export class NuevaTarjetaPage implements OnInit {

  form = new FormGroup({
    nombre: new FormControl(null,{updateOn:'blur',validators:[Validators.required]}),
    apellido: new FormControl(''),
    celular: new FormControl('')
  });
  constructor(private datosServices: DatosService,
              private router: Router) { }

  ngOnInit() 
  {
  }
  crearUsuario()
  {
    console.log('creando usuario');
    console.log(this.form);
    this.datosServices.anadirPersona(this.form.value.nombre,
    this.form.value.celular, this.form.value.lugar, this.form.value.producto, 
    this.form.value.cantidad, this.form.value.precio);
    
    this.form.reset();
    this.router.navigate(['/persona'])

  }

}
