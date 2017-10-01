import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product/product.service';
import { StudentService } from './service/student/student.service';
import { LoginService } from './service/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, StudentService]
})
export class AppComponent implements OnInit {
  title = 'app';
  product: any[];
  constructor(private productService: ProductService, private studentService: StudentService, private loginService: LoginService) {
    console.log(studentService);
  }

  ngOnInit() {
    this.product = this.productService.getProducts();
  }

  getStudents() {
    console.log(this.studentService.getStudents());
  }




}
