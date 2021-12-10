import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos: Ingreso [] = [];

  constructor(private ingresoservicio: IngresoServicio) { }

  ngOnInit(): void {
    this.ingresos = this.ingresoservicio.ingreso;
  }

  // tslint:disable-next-line: typedef
  eliminarRegistro(ingreso: Ingreso){
    this.ingresoservicio.eliminar(ingreso);
  }

}
