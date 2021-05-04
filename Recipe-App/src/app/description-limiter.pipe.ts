import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionLimiter',
})
export class DescriptionLimiterPipe implements PipeTransform {
  transform(value: string, offset : number): string {
    if (value.length > offset) {
      value = value.substr(0, offset) + '...';
    }
    return value;
  }
}
