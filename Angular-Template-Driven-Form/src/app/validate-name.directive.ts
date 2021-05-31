import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { ValidatorService } from './validation.service';

@Directive({
  selector: '[appValidateName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidateNameDirective, multi: true },
  ],
})
export class ValidateNameDirective implements Validator {

  @Input('appValidateName') field : string;

  constructor(private validatorService: ValidatorService) {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.validatorService.validateName(this.field)(control);
  }
}
