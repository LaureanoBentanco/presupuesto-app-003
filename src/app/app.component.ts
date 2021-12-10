import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos: Ingreso [] = [];
  egresos: Egreso [] = [];

  constructor(private ingresoservicio: IngresoServicio, private egresoservicio: EgresoServicio){
    this.ingresos = ingresoservicio.ingreso;
    this.egresos = egresoservicio.egreso;
  }

    // tslint:disable-next-line: typedef
    getIngresoTotal(){
      let ingresoTotal = 0;
      this.ingresos.forEach(ingreso => {
        ingresoTotal += ingreso.valor;
      });
      return ingresoTotal;

    }

    // tslint:disable-next-line: typedef
    getEgresoTotal(){
      let egresoTotal = 0;
      this.egresos.forEach(egreso => {
        egresoTotal += egreso.valor;
      });
      return egresoTotal;
    }

    // tslint:disable-next-line: typedef
    getporcentajeTotal(){
      return this.getIngresoTotal() / this.getEgresoTotal();
    }

    // tslint:disable-next-line: typedef
    getpresupuestoTotal(){
      return this.getIngresoTotal() - this.getEgresoTotal();
    }
  }

