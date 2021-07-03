import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Persona} from './persona.model';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private persona: Persona[] =
  [ new Persona('1', 'Marcus','823444553','Super C','Carnes','5 Unidades','2000',
  'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg',
   ),
    new Persona('2', 'Daniel','823444553','Super A','Verduras','10 Unidades','6000',
  'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg', 
   )
  ];

  constructor(private http: HttpClient) { }
  anadirPersona(nomb: string,cel: string,lug: string,pro: string,can: string,pre: string,)
  {
    const nuevaPersona = new Persona(Math.random().toString(),
    nomb, cel, lug, pro, can, pre,'https://agroactivocol.com/wp-content/uploads/2020/07/Tomate-Lancero.jpg');
    this.persona.push(nuevaPersona);
    this.http.post('https://angular-14e28-default-rtdb.firebaseio.com/persona.json',
    {...nuevaPersona, idPersona:null}).subscribe();
  }

  getPersonas()
  {
    return [...this.persona];
  }
  getPersona(perId: string)
  {
    return {...this.persona.find(persona=> persona.idpersona===perId)};

  }
  borrarPersonas(perId: string)
  {
    this.persona=this.persona.filter(persona=>persona.idpersona!==perId);
  }
}
