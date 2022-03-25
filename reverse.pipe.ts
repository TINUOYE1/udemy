import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value) {
      let arr = value.split('')
      let reversedArray = arr.reverse()
      return reversedArray.join('')
  }

}
