import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo = 'IngesoOperacion';
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  tipoOperacion(evento){
    this.tipo = evento.target.value;

  }
  // tslint:disable-next-line: typedef
  agregarValor(){
    if ( this.tipo === 'ing') {
    this.ingresoServicio.ingreso.push(new Ingreso(this.descripcionInput, this.valorInput));
    }
    else {
    this.egresoServicio.egreso.push(new Egreso(this.descripcionInput, this.valorInput));
    }
    }

}

