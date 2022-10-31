import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeSize'
})
export class ChangeSizePipe implements PipeTransform {

  transform(value: string): string {
    let list = value.split(" ")
    for (let index = 0; index < list.length; index++) {
      if (index % 5 == 0) {
        list[index] += "\n>"
      }
    }
    return list.join(" ");
  }

}
