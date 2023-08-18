import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateInterface, IProduct } from '../interfaces';
import { Store, select } from '@ngrx/store';
import { ProductService } from '../service/product.service';
import { cartSelector } from '../store/product.selectors';
import * as CartActions from '../store/product.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  cart$: Observable<IProduct[]>;
  products: IProduct[];

  constructor(
    private store: Store<AppStateInterface>,
    private productService: ProductService) {
    this.products = [];
    this.cart$ = this.store.pipe(select(cartSelector));
  }

  ngOnInit(): void {
    this.productService.getProducts().then((data) => (this.products = data.slice(0,
      12)));
  }
  addToCart(product: IProduct) {
    this.store.dispatch(CartActions.postCart({ products: product }))
  }
}
