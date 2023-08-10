import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista-uno',
  templateUrl: './lista-uno.component.html',
  styleUrls: ['./lista-uno.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaUnoComponent {
  inputData: string;
  @Output() emitirLista = new EventEmitter<string>();

  constructor() {
    this.inputData = '';
  }

  public onEnviarLista() {
    this.emitirLista.emit(this.inputData);
  }

  public render(): boolean {
    console.log('Render uno');
    return true;
  }
}
