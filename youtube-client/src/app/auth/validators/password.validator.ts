import { ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
  return ({ value }): ValidationErrors | null => {
    if (value.trim().length && (value.length < 8 || !value.match(/(?=.*[a-z])(?=.*[A-Z])\w+/))) {
      return { weak: true };
    }
    return null;
  };
}
