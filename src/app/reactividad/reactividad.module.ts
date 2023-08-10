import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactividadRoutingModule } from './reactividad-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { NavBarCartComponent } from './nav-bar-cart/nav-bar-cart.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    NavBarCartComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    ReactividadRoutingModule
  ]
})
export class ReactividadModule { }
