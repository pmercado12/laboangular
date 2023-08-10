import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  contador: number;

  constructor() {
    this.contador = 10;
  }

  public incrementar() {
    this.contador++;
  }

  public decrementar() {
    this.contador--;
  }
}
