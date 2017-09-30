import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      id: [''],
      name: [''],
      dob: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: ['']
      }),
      experiences: this.fb.array([this.buildForm()])
    });
  }


  buildForm() {
    return this.fb.group({
      previousEmployer: [''],
      startDate: [''],
      endDate: [''],
      designation: ['']
    });
  }

  addEmployer() {
    let exp = <FormArray>this.employeeForm.controls['experiences'];
    exp.push(this.buildForm());
  }

  removeEmployer(i: number) {
    let exp = <FormArray>this.employeeForm.controls['experiences'];
    exp.removeAt(i);
  }

}
