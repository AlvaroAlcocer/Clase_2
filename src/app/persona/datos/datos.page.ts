import { Component, OnInit } from '@angular/core';
import {Persona} from '../persona.model';
import { DatosService } from '../datos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  cargadoPersona: Persona;

  constructor(private activatedRouter: ActivatedRoute,private datosServicio: DatosService,
    private router: Router, private alertController: AlertController
    ) { }

  ngOnInit()
  {
    this.activatedRouter.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('idpersona'))
      {return;}
      const idpersona=paramMap.get('idpersona');
      this.cargadoPersona=this.datosServicio.getPersona(idpersona);
    });
  }
borrarDatoPersona()
{
  this.alertController.create(
    {
      header: 'Borrar Dato',
      message: '¿Desea borrar los datos?',
      buttons:
      [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Borrar',
          handler:()=>
          {
            this.datosServicio.borrarPersonas(this.cargadoPersona.idpersona);
            this.router.navigate(['/persona']);
          }
        }
      ]
    }
  ).then(alertaEl=>{alertaEl.present();});
}
}
