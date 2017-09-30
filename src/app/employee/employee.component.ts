import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      id: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      address: this.fb.group({
        addressLine1: ['', Validators.required],
        addressLine2: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required]
      }),
      experiences: this.fb.array([this.buildForm()])
    });
  }


  buildForm() {
    return this.fb.group({
      previousEmployer: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      designation: ['', Validators.required]
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
