import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUnoComponent } from './lista-uno/lista-uno.component';
import { ListaDosComponent } from './lista-dos/lista-dos.component';
import { ListasComponent } from './listas/listas.component';

const routes: Routes = [
  {
    path: 'lista-uno',
    component: ListaUnoComponent
  },
  {
    path: 'lista-dos',
    component: ListaDosComponent
  },
  {
    path: 'listas',
    component: ListasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionRoutingModule { }
