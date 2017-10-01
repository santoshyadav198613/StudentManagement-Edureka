import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { RoutingModule } from './routing/routing.module';
import { StudentModule } from './student/student.module';

import { AppComponent } from './app.component';
import { StudentService } from './service/student/student.service';

import { ProductService } from './service/product/product.service';
import { EmployeeComponent } from './employee/employee.component';
import { PostComponent } from './post/post.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component'
import { LoginService } from './service/login/login.service';
import { AuthGuard } from './service/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PostComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    StudentModule,
    RoutingModule
  ],
  providers: [ProductService, StudentService, LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



