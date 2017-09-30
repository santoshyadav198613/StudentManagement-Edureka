import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';

import { StudentService } from './service/student/student.service';

import { ProductService } from './service/product/product.service';
import { EmployeeComponent } from './employee/employee.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    EmployeeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }



