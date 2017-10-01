import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AuthGuard } from '../service/guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'student', component: StudentComponent , canActivate : [AuthGuard] }
    ])
  ],
  declarations: [StudentComponent,
    StudentListComponent]
})
export class StudentModule { }
