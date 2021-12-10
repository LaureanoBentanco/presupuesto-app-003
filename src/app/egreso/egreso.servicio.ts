// tslint:disable-next-line: quotemark
import { Egreso } from "./egreso.model";

export class EgresoServicio{
  egreso: Egreso [] = [
    new Egreso('Ropa', 15000),
    new Egreso('Renta Depto', 20000)
  ];

  // tslint:disable-next-line: typedef
  eliminar(Egresos: Egreso){
    const indice: number  = this.egreso.indexOf(Egresos);
    this.egreso.splice(indice, 1);
  }

}
