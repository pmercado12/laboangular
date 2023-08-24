import { Component, inject, OnInit } from '@angular/core';
import { ITarea } from '../tarea';
import { FormBuilder, Validators } from '@angular/forms';
import { TareasService } from '../tareas.service';

@Component({
    selector: 'app-tareas',
    templateUrl: './tareas.component.html',
    styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
    tareas: ITarea[];
    tarea: ITarea;
    openModal: string;
    private idTarea = 0;
    dragData: any;

    private fb = inject(FormBuilder);
    private tareasService = inject(TareasService);

    form = this.fb.group({
        id: [''],
        titulo: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        estado: ['backlog', [Validators.required]]
    });

    constructor() {
        this.tareas = [];
        this.tarea = { titulo: '', descripcion: '', estado: '' };
        this.openModal = 'none';
    }

    ngOnInit(): void {
        this.cargarTareas();
    }
    cargarTareas() {
        this.tareasService.getTareas().subscribe(resp => {
            console.log(resp);
            this.tareas = [...resp]
        })
    }

    onRegistrarTarea() {
        if (this.form.valid) {

            let tarea: ITarea = this.form.getRawValue() as ITarea;

            console.log(tarea);

            if (tarea.id) {
                /*const index = this.tareas.findIndex(t => t.id == id);
                if (index !== -1) {
                    this.tareas[index] = this.form.getRawValue() as ITarea;
                }*/
                this.tareasService.updateTarea(tarea);
            } else {
                let tar: ITarea = this.form.getRawValue() as ITarea;
                /*this.idTarea += 1;
                tar.id = this.idTarea.toString()
                this.tareas.push(tar);*/
                this.tareasService.addTarea(tarea);
            }
            this.form.reset();
            this.openModal = 'none';
            this.form.patchValue({ estado: 'backlog' });
        }

    }

    editarTarea(tar: ITarea) {
        this.form.patchValue(tar);
        this.openModal = 'block';
    }

    eliminarTarea(tar: ITarea) {
        this.tareasService.removeTarea(tar);
        //this.tareas = this.tareas.filter(t => t.id !== tar.id);
    }

    dragStart(event: DragEvent, tar: ITarea) {
        this.dragData = event.target;
        this.tarea = tar;
    }
    allowDrop(event: DragEvent) {
        event.preventDefault();
    }
    drop(event: DragEvent, estado: string) {
        event.preventDefault();
        const target = event.target as HTMLElement;
        target.appendChild(this.dragData);
        // update tarea
        this.tarea.estado = estado;
        this.tareasService.updateTarea(this.tarea);
        /*const index = this.tareas.findIndex(t => t.id == this.tarea.id);
        if (index !== -1) {
            this.tareas[index] = this.tarea;
            this.tarea = { id: '', titulo: '', descripcion: '', estado: '' };
        }*/
    }
}
