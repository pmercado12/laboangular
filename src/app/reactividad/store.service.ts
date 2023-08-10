import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myCart = new BehaviorSubject<Product[]>([]);
  private myProducts: Product[];
  public myCart$ = this.myCart.asObservable();

  constructor() {
    this.myProducts = [];
  }

  public addProduct(product: Product) {
    let prod = this.myProducts.find(prod => prod.id == product.id);
    if (prod) {
      prod.quantity = prod.quantity + 1;
    } else {
      product.quantity = 1;
      this.myProducts.push(product);
    }
    this.myCart.next(this.myProducts);
  }

  public removeProduct(product: Product) {
    this.myProducts = this.myProducts.filter(prod => prod.id != product.id);
    this.myCart.next(this.myProducts);
  }
}
