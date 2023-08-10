import { Component } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {
  lista: string[];

  constructor() {
    this.lista = [];
  }

  public obtenerDatos(data: string) {
    this.lista.push(data);
  }
}
