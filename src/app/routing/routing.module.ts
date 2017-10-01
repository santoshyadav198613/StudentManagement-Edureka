import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmployeeComponent } from '../employee/employee.component';

import { PostComponent } from '../post/post.component';
import { LoginComponent } from '../login/login.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'employee', component: EmployeeComponent },
      { path: 'post', component: PostComponent },
      { path: 'student', loadChildren: '../student/student.module#StudentModule' },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },//default routing
      { path: '**', component: PagenotfoundComponent } //wild card character 
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
