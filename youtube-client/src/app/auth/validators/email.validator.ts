import { ValidationErrors, ValidatorFn } from '@angular/forms';

export function EmailValidator(): ValidatorFn {
  return ({ value }): ValidationErrors | null => {
    if (value && !value.match(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/)) {
      return { email: true };
    }
    return null;
  };
}
