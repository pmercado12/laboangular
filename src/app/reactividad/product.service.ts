import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_API: string = 'https://dummyjson.com/products';

  constructor(public http: HttpClient) { }

  public getProducts() {
    return this.http.get(this.URL_API);
  }

  public addProduct(product: Product) {
    return this.http.post(`${this.URL_API}/add`, product);
  }

  public updateProduct(product: Product) {
    return this.http.put(`${this.URL_API}/${product.id}`, product);
  }

  public removeProduct(id: number) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
