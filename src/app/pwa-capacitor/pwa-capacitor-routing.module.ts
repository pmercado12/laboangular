import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAlumnoComponent } from './registro-alumno/registro-alumno.component';

const routes: Routes = [
  {
    path: 'registro-alumno',
    component: RegistroAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwaCapacitorRoutingModule { }
