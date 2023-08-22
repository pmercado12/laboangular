import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITarea } from '../tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  @Input() tarea: ITarea;
  @Output() editar = new EventEmitter<ITarea>();
  @Output() eliminar = new EventEmitter<ITarea>();

  constructor() {
    this.tarea = {
      id: '',
      titulo: '',
      descripcion: '',
      estado: ''
    }

  }
}
