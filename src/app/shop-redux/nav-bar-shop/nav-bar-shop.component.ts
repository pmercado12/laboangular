import { Component } from '@angular/core';
import { AppStateInterface, IProduct } from '../interfaces';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { cartSelector } from '../store/product.selectors';

@Component({
  selector: 'app-nav-bar-shop',
  templateUrl: './nav-bar-shop.component.html',
  styleUrls: ['./nav-bar-shop.component.css']
})
export class NavBarShopComponent {
  cart$: Observable<IProduct[]>;

  displayMenu: string;
  constructor(private store: Store<AppStateInterface>) {
    this.cart$ = this.store.pipe(select(cartSelector));
    this.displayMenu = 'none';
  }

}
