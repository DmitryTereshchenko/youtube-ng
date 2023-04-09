import { ValidationErrors, ValidatorFn } from '@angular/forms';

export function DateValidator(): ValidatorFn {
  return ({ value }): ValidationErrors | null => {
    const enteredDate = new Date(Date.parse(value)).getTime();
    const currentDate = new Date().getTime();
    if (enteredDate > currentDate) {
      return { date: true };
    }
    return null;
  };
}
