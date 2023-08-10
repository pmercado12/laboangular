import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { NietoComponent } from './nieto/nieto.component';

const routes: Routes = [
  {
    path: 'padre',
    component: PadreComponent
  },
  {
    path: 'hijo',
    component: HijoComponent
  },
  {
    path: 'nieto',
    component: NietoComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputOutputRoutingModule { }
