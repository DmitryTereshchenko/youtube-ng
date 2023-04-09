import { FormGroup } from '@angular/forms';

export abstract class FormBase {
  protected abstract form: FormGroup;
  protected abstract getControlErrors(controlName: string): string | null;
  protected abstract buildForm(): void;
  protected abstract onSubmitForm(): void;

  isControlInvalid(controlName: string) {
    const control = this.form.controls[controlName];
    return control.touched && control.errors;
  }

  isSubmitButtonDisabled() {
    return this.form.invalid || !this.form.touched;
  }
}
