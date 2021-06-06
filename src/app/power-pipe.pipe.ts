import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerPipe'
})
export class PowerPipePipe implements PipeTransform {

  transform(value: number, exponentValue: number): number {
    return Math.pow(value, isNaN(exponentValue) ? 1 : exponentValue);
  }


}
