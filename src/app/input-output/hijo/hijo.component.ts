import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() 
  hcontador: number;
  @Output()
  emitirAlPadre = new EventEmitter<number>();

  constructor(){
    this.hcontador = 10;
  }

  multiplicar(){
    this.hcontador*=2;
    this.emitirAlPadre.emit(this.hcontador);
  }

  dividir(){
    this.hcontador/=2;
    this.emitirAlPadre.emit(this.hcontador);
  }

  asignaAndEmite(param:number){
    this.hcontador = param;
    this.emitirAlPadre.emit(this.hcontador);
    }
}
