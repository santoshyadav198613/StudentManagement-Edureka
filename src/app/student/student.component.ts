import {
  Component, OnInit, ViewChild, ViewChildren, QueryList,
  AfterViewInit, AfterViewChecked, DoCheck, OnDestroy
} from '@angular/core';
import { Student } from '../service/student/student';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from '../service/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: []
})
export class StudentComponent implements OnInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {
  studentData = Array<Student>();
  student: Student = new Student();
  title: string = 'Student List';
  isVisible: boolean = true;
  @ViewChild(StudentListComponent)
  studentListComponent: StudentListComponent;
  @ViewChildren(StudentListComponent)
  studenttListComp: QueryList<StudentListComponent>;
  error: string;

  constructor(private studService: StudentService) {
    console.log(studService);
  }


  ngOnInit() {
    console.log('This is Parent Component init method');
    if (this.studService.isLoggedIn) {
      this.studentData = this.studService.getStudents();
    }

  }

  ngDoCheck(): void {
    if (this.student.name !== undefined && this.student.name.length > 5) {
      this.error = "The lenght should be below 5";
    }
    console.log('do check event is called' + this.title);
  }

  ngAfterViewInit() {
    console.log(this.studenttListComp);
    //this.studenttListComp.forEach((data) => setTimeout(() => data.studentList = this.studentData, 0));
  }

  ngAfterViewChecked() {
    console.log(this.studenttListComp);
  }


  toggle() {
    this.isVisible = !this.isVisible;
  }

  handleChildEvent(hidden: boolean) {
    console.log(hidden);
    this.studentData[0].id = 900;
  }

  ngOnDestroy(): void {
    console.log('This is destroy lifecycle hooks');
  }


  addStudent() {
    this.studService.addStudent(this.student);
    // this.studentData.push(student);
  }
}
