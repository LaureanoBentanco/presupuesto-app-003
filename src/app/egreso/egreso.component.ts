import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos: Egreso [] = [];

  @Input() ingresoTotal: number;

  constructor(private egresoservicio: EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.egresoservicio.egreso;
  }

  // tslint:disable-next-line: typedef
  eliminarEgreso(egreso: Egreso){
    this.egresoservicio.eliminar(egreso);
  }

  // tslint:disable-next-line: typedef
  calcularPorcentaje(egreso: Egreso ){
    return egreso.valor / this.ingresoTotal;
  }

}
