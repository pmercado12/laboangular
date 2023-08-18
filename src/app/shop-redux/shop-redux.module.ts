import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopReduxRoutingModule } from './shop-redux-routing.module';
import { NavBarShopComponent } from './nav-bar-shop/nav-bar-shop.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/product.reducers'


@NgModule({
  declarations: [
    NavBarShopComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ShopReduxRoutingModule,
    StoreModule.forRoot({
      products: reducers
    })
  ]
})
export class ShopReduxModule { }
