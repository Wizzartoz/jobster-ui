import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertExpirienceToString'
})
export class ConvertExpirienceToStringPipe implements PipeTransform {

  transform(value: number): string {
    switch (value){
      case 0.5:
        return "6 month experience"
      case 1:
        return "1 years experience"
      case 2:
        return "2 years experience"
      case 3:
        return "3 years experience"
      default:
        return "more then 5 years experience"
    }
  }

}
