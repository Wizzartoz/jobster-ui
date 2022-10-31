import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addStringIf'
})
export class AddStringIfPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length < 207) {
      return value;
    }
    return value + "...";
  }

}
