import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista-dos',
  templateUrl: './lista-dos.component.html',
  styleUrls: ['./lista-dos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaDosComponent {
  inputData: string;
  @Output() emitirLista = new EventEmitter<string>();

  constructor() {
    this.inputData = '';
  }

  public onEnviarLista() {
    this.emitirLista.emit(this.inputData);
  }

  public render(): boolean {
    console.log('Render dos');
    return true;
  }
}
