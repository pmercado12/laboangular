import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ListaUnoComponent } from './lista-uno/lista-uno.component';
import { ListaDosComponent } from './lista-dos/lista-dos.component';
import { ListasComponent } from './listas/listas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaUnoComponent,
    ListaDosComponent,
    ListasComponent
  ],
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule,
    FormsModule
  ]
})
export class ChangeDetectionModule { }
