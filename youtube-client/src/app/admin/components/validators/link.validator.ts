import { ValidationErrors, ValidatorFn } from '@angular/forms';

export function LinkValidator(): ValidatorFn {
  return ({ value }): ValidationErrors | null => {
    if (value && !value.match(/(http|https):\/\/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi)) {
      return { link: true };
    }
    return null;
  };
}
