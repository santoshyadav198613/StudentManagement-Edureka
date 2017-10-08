import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product/product.service';
import { LoginService } from './service/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  title = 'app';
  product: any[];
  constructor(private productService: ProductService,  private loginService: LoginService) {
 
  }

  ngOnInit() {
    this.product = this.productService.getProducts();
  }

}
