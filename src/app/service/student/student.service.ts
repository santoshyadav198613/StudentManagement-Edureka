import { Injectable } from '@angular/core';
import { Student } from './student';
@Injectable()
export class StudentService {

  studentData: Array<Student> = [
    { id: 1, name: 'Student1', age: 12, address: 'Mumbai', dob: new Date('09/23/2002') },
    { id: 2, name: 'Student2', age: 12, address: 'Pune', dob: new Date('01/23/2002') },
    { id: 3, name: 'Student3', age: 12, address: 'Banglore', dob: new Date('04/23/2002') }
  ];
  constructor() { }

  getStudents() {
    return this.studentData;
  }

  addStudent(student: Student) {
    this.studentData.push(student);
  }

}
