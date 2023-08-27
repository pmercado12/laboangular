import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAlumnoComponent } from './registro-alumno/registro-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  {
    path: 'registro-alumno',
    component: RegistroAlumnoComponent
  },
  {
    path: 'lista-alumnos',
    component: ListaAlumnosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwaCapacitorRoutingModule { }
