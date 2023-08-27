import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwaCapacitorRoutingModule } from './pwa-capacitor-routing.module';
import { RegistroAlumnoComponent } from './registro-alumno/registro-alumno.component';
import { FormsModule } from '@angular/forms';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';


@NgModule({
  declarations: [
    RegistroAlumnoComponent,
    ListaAlumnosComponent
  ],
  imports: [
    CommonModule,
    PwaCapacitorRoutingModule,
    FormsModule
  ]
})
export class PwaCapacitorModule { }
