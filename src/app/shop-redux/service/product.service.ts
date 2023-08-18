import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductsData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg'
        ,
        price: 79
        ,
        category: 'Fitness'
        ,
        quantity:
          2
        ,
        inventoryStatus: 'LOWSTOCK'
        ,
        rating:
          3
      }, {
        id: '1027'
        ,
        code: 'acvx872gc'
        ,
        name: 'Yellow Earbuds'
        ,
        description: 'Product Description'
        ,
        image: 'yellow-earbuds.jpg'
        ,
        price: 89
        ,
        category: 'Electronics'
        ,
        quantity: 35
        ,
        inventoryStatus: 'INSTOCK'
        ,
        rating:
          3
      }, {
        id: '1028'
        ,
        code: 'tx125ck42'
        ,
        name: 'Yoga Mat'
        ,
        description: 'Product Description'
        ,
        image: 'yoga-mat.jpg'
        ,
        price: 20
        ,
        category: 'Fitness'
        ,
        quantity: 15
        ,
        inventoryStatus: 'INSTOCK'
        ,
        rating:
          5
      }, {
        id: '1029'
        ,
        code: 'gwuby345v'
        ,
        name: 'Yoga Set'
        ,
        description: 'Product Description'
        ,
        image: 'yoga-set.jpg'
        ,
        price: 20
        ,
        category: 'Fitness'
        ,
        quantity: 25
        ,
        inventoryStatus: 'INSTOCK'
        ,
        rating:
          8
      }
    ];
  }
  
  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}