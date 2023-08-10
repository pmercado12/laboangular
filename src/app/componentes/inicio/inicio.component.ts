import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  colores: string[];
  primarios: string[];
  constructor() {
    this.colores = ['rojo', 'azul', 'amarillo', 'café'];
    this.primarios = this.colores;
    this.primarios.splice(3, 1);

    console.log('colores', this.colores);
    console.log('primarios', this.primarios);

  }
}
