import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "exponentialStrength",
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(number: number, exponent?: number): number {
    return Math.pow(number, isNaN(exponent) ? 1 : exponent);
  }
}
