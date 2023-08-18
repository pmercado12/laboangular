import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxReduxRoutingModule } from './ngrx-redux-routing.module';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    MyCounterComponent
  ],
  imports: [
    CommonModule,
    NgrxReduxRoutingModule,
    StoreModule.forRoot({ count: counterReducer },{})
  ]
})
export class NgrxReduxModule { }
