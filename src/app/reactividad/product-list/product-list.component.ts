import { Component, OnInit } from '@angular/core';
import { Product, ProductList } from '../product';
import { ProductService } from '../product.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: ProductList;
  products: Product[];

  constructor(private productService: ProductService,
    private storeService: StoreService) {
    this.productList = { products: [], total: 0, skip: 0, limit: 0 };
    this.products = [];
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  public loadProduct() {
    this.productService.getProducts().subscribe(data => {
      this.productList = data as ProductList;
      this.products = this.productList.products;
    });
  }

  public addProductToCart(producto: Product) {
    this.storeService.addProduct(producto);
  }
}
