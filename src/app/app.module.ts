import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { StudentService } from './service/student/student.service';

import { ProductService } from './service/product/product.service';
import { EmployeeComponent } from './employee/employee.component';
import { PostComponent } from './post/post.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component'
import { LoginService } from './service/login/login.service';
import { AuthGuard } from './service/guards/auth.guard';
import { HoverDirective } from './directives/hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PostComponent,
    PagenotfoundComponent,
    LoginComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RoutingModule
  ],
  providers: [ProductService, StudentService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



