// tslint:disable-next-line: quotemark
import { Ingreso } from './ingreso.model';

export class IngresoServicio{
  ingreso: Ingreso[] = [
    new Ingreso ('Salario', 200000),
    new Ingreso ('venta Coche', 600000)
  ];
  egreso: any;
  // tslint:disable-next-line: typedef
  eliminar(ingreso: Ingreso){
    const indice: number  = this.ingreso.indexOf(ingreso);
    this.ingreso.splice(indice, 1);
  }
}
