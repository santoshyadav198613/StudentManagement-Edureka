import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, args: any, args1: number): any {
    return 'Hello ' + value + ' ' + args + ' ' + args1 ;
  }

}
