import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix'
})
export class NumberSuffixPipe implements PipeTransform {
  suffixes = ['K', 'M', 'B'];
  transform(value: number): unknown {
    return this.getSuffix(value);
  }

  getSuffix(num: number): string | number {
    if (Number.isNaN(num)) return 0;
    if (num < 1000) return num;
    const power = Math.floor(Math.log(num) / Math.log(1000));

    return Math.round(num / (1000 ** power)) + this.suffixes[power - 1];
  }
}
