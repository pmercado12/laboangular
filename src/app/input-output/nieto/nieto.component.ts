import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent {
  @Input() ncontador: number;
  @Output() resetContador = new EventEmitter<number>();
  constructor() {
    this.ncontador = 10
  }
  ngOnInit(): void {
  }
  reset() {
    this.ncontador = 0;
    this.resetContador.emit(this.ncontador);
  }

}
