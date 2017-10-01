import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AuthGuard } from '../service/guards/auth.guard';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: StudentComponent, canActivate: [AuthGuard] },
      { path: ':id', component: StudentDetailsComponent }
    ])
  ],
  declarations: [StudentComponent,
    StudentListComponent,
    StudentDetailsComponent]
})
export class StudentModule { }
