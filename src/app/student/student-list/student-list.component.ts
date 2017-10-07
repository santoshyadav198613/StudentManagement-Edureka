import {
  Component, OnInit, Input, Output, EventEmitter,
  OnChanges, SimpleChanges, DoCheck, ChangeDetectionStrategy
} from '@angular/core';
import { Student } from '../../service/student/student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
  //,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentListComponent implements OnInit, OnChanges {
  @Input() studentList: Array<Student>;
  isVisible: boolean = false;
  @Output() hidden = new EventEmitter<boolean>();
  userRole: string = 'User';
  fee: number = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit() {
    console.log('this is child component init method');
  }

  // ngDoCheck(): void {
  //   console.log('do check event is called');
  // }

  toggle() {
    this.isVisible = !this.isVisible;
    this.hidden.emit(this.isVisible);
    if (this.userRole === 'User') {
      this.userRole = 'Admin'
    }
    else {
      this.userRole = 'User'
    }

  }

}
