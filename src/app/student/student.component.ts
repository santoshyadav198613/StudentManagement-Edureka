import {
  Component, OnInit, ViewChild, ViewChildren, QueryList,
  AfterViewInit, AfterContentInit, DoCheck
} from '@angular/core';
import { Student } from './student';
import { StudentListComponent } from './student-list/student-list.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterViewInit, AfterContentInit, DoCheck {
  studentData = Array<Student>();
  title: string = 'Student List';
  isVisible: boolean = true;
  @ViewChild(StudentListComponent)
  studentListComponent: StudentListComponent;
  @ViewChildren(StudentListComponent)
  studenttListComp: QueryList<StudentListComponent>;
  constructor() { }


  ngOnInit() {
    console.log('This is Parent Component init method');
    this.studentData = [
      { id: 1, name: 'Student1', age: 12, address: 'Mumbai', dob: new Date('09/23/2002') },
      { id: 2, name: 'Student2', age: 12, address: 'Pune', dob: new Date('01/23/2002') },
      { id: 3, name: 'Student3', age: 12, address: 'Banglore', dob: new Date('04/23/2002') }
    ]

    this.studentListComponent.studentList = this.studentData;
    //console.log(this.studenttListComp);
  }

  ngDoCheck(): void {

    console.log('do check event is called');
  }

  ngAfterViewInit() {
    // console.log(this.studenttListComp);
    // this.studenttListComp.forEach((data) => data.studentList = this.studentData);
  }

  ngAfterContentInit() {

  }


  toggle() {
    this.isVisible = !this.isVisible;
  }

  handleChildEvent(hidden: boolean) {
    console.log(hidden);
    this.studentData[0].id = 900;
  }
}
