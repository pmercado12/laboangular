import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'input-output',
    loadChildren: () => import('./input-output/input-output.module').then(m => m.InputOutputModule)
  },
  {
    path: 'change-detection',
    loadChildren: () => import('./change-detection/change-detection.module').then(m => m.ChangeDetectionModule)
  },
  {
    path: 'reactividad',
    loadChildren: () => import('./reactividad/reactividad.module').then(m => m.ReactividadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
