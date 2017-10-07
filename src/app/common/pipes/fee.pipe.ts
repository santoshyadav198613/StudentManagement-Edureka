import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../service/student/student';
@Pipe({
  name: 'fee'
})
export class FeePipe implements PipeTransform {

  transform(studentList: Student[], fee: number): any {
    return studentList.filter((student) => student.fee > fee);

  }

}
