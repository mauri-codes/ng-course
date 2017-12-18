import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'separator'})
export class SeparatorPipe implements PipeTransform {
  transform (inputString, separator) {
    const array = inputString.split(separator);
    return array;
  }
}
