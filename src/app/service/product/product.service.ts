import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts() {
    let product = [
      { id: 1, name: 'product1', price: 1000 },
      { id: 1, name: 'product1', price: 1000 },
    ];

    return product;
  }

}
