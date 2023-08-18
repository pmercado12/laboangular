import { Component, inject } from '@angular/core';
import { ITarea } from '../tarea';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  tareas: ITarea[];
  tarea: ITarea;
  openModal: string;

  private fb = inject(FormBuilder);

  form = this.fb.group({
    titulo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    estado: ['', [Validators.required]]
  });

  constructor() {
    this.tareas = [];
    this.tarea = { titulo: '', descripcion: '', estado: '' };
    this.openModal = 'none';
  }

  onRegistrarTarea() {
    if (this.form.valid) {
      //const { titulo, descripcion, estado } = this.form.getRawValue();
      this.tareas.push(this.form.getRawValue() as ITarea);
      this.tarea = { titulo: '', descripcion: '', estado: '' };
    }
  }

  eliminarTarea(tarea: ITarea) {
    let index = this.tareas.indexOf(tarea);
    this.tareas.slice(index, 1);
    //this.tareas = this.tareas.filter(tar => tar.descripcion != tarea.descripcion);
  }

  editarTarea(tarea: ITarea) {
    this.tarea = { ...tarea }
    this.openModal = 'block';
  }
}
