export class Persona

{
  idpersona: string;
  nombre: string;
  celular: string;
  lugar: string;
  producto: string;
  cantidad: string;
  precio: string;
  imagenUrl: string;
  
  
  constructor(idPer: string, nomb: string, cel: string,
    lug: string,pro: string,can: string,pre: string, url: string, )
  {
    this.idpersona = idPer;
    this.nombre = nomb;
    this.celular = cel;
    this.lugar = lug;
    this.producto = pro;
    this.cantidad = can;
    this.precio = pre;
    this.imagenUrl = url;
  }
}
