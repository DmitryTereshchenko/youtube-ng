import { FormGroup } from '@angular/forms';

export abstract class FormBase {
  protected abstract form: FormGroup;
  protected abstract buildForm(): void;
  protected abstract onSubmitForm(): void;

  isControlInvalid(controlName: string, errorCode?: string) {
    const control = this.form.controls[controlName];
    return control.touched && control.hasError(errorCode || '');
  }

  isSubmitButtonDisabled() {
    return this.form.invalid || !this.form.touched;
  }
}
