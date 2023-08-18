import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanFirebaseRoutingModule } from './kanban-firebase-routing.module';
import { TareaComponent } from './tarea/tarea.component';
import { TareasComponent } from './tareas/tareas.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TareaComponent,
    TareasComponent
  ],
  imports: [
    CommonModule,
    KanbanFirebaseRoutingModule,
    ReactiveFormsModule,
  ]
})
export class KanbanFirebaseModule { }
