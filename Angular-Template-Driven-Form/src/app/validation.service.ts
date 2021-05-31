import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  validateName(field: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const regEx = /^[a-zA-Z ]*$/;
      const name: string = control.value != null ? control.value : '';
      if (name.length == 0) {
        return { error: `${field} is Required` };
      } else if (!regEx.test(name)) {
        return { error: `${field} can only contain alphabets and spaces` };
      }
      return null;
    };
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
}
