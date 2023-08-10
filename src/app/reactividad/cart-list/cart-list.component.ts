import { Component, OnDestroy } from '@angular/core';
import { StoreService } from '../store.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnDestroy {
  myCart$ = this.storeService.myCart$;
  constructor(private storeService: StoreService) {

  }
  public removeProduct(product: Product) {
    this.storeService.removeProduct(product);
  }

  ngOnDestroy(): void {
    //this.myCart$
  }

  public getTotal(listaProductos: Product[] | null): number {
    let total = 0;
    if (listaProductos) {
      listaProductos.forEach(prod => {
        total += prod.quantity * prod.price;
      })
    }
    return total;
  }
}
