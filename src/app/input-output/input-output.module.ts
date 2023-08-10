import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputRoutingModule } from './input-output-routing.module';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { NietoComponent } from './nieto/nieto.component';


@NgModule({
  declarations: [
    PadreComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    CommonModule,
    InputOutputRoutingModule
  ]
})
export class InputOutputModule { }
