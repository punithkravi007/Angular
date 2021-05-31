import { Directive, ElementRef, Input, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NgModel,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { ValidatorService } from './validation.service';

@Directive({
  selector: '[appMatchPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordDirective,
      multi: true,
    },
  ],
})
export class MatchPasswordDirective implements Validator {
  @Input('appMatchPassword') MatchPassword: string[] = [];

  constructor(private validatorService: ValidatorService) {}

  validate(FormGroup: FormGroup): ValidationErrors {
    return this.validatorService.MatchPassword(
      this.MatchPassword[0],
      this.MatchPassword[1]
    )(FormGroup);
  }
}
