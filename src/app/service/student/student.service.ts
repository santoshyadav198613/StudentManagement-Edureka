import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class StudentService {

  // studentData: Array<Student> = [
  //   { _id: 1, name: 'Student1', age: 12, address: 'Mumbai', dob: new Date('09/23/2002'), fee: 10300 },
  //   { _id: 2, name: 'Student2', age: 12, address: 'Pune', dob: new Date('01/23/2002'), fee: 25000 },
  //   { _id: 3, name: 'Student3', age: 12, address: 'Banglore', dob: new Date('04/23/2002'), fee: 35000 }
  // ];
  constructor(public isLoggedIn: boolean, private httpClient: HttpClient) {
    console.log(isLoggedIn);
  }

  getStudents() {
    return this.httpClient.get<Student[]>('http://localhost:3000/api/student');

  }

  addStudent(student: Student) {
    return this.httpClient.post('http://localhost:3000/api/student', student);

  }
}
