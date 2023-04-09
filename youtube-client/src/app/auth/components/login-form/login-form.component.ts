import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, ValidationErrors, Validators
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { PasswordValidator } from '../../validators/password.validator';
import { FormBase } from '../../../utils/FormBase';
import { EmailValidator } from '../../validators/email.validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends FormBase implements OnInit {
  form!: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmitForm() {
    const { login, password } = this.form.getRawValue();
    const newUser: User = { login, password };
    this.authService.login(newUser);
  }

  buildForm() {
    this.form = this.fb.group({
      login: ['', Validators.compose([Validators.required, EmailValidator()])],
      password: ['', Validators.compose([Validators.required, PasswordValidator()])]
    });
  }

  getPasswordErrors(formErrors: ValidationErrors): string {
    let errorMessage = '';
    Object.keys(formErrors).forEach(key => {
      switch (key) {
        case 'required':
          errorMessage = 'Please enter a password';
          break;
        case 'weak':
          errorMessage = 'Your password isn\'t strong enough';
          break;
        default:
          errorMessage = 'The field is invalid';
      }
    });

    return errorMessage;
  }

  getLoginErrors(formErrors: ValidationErrors): string {
    let errorMessage = '';
    Object.keys(formErrors).forEach(key => {
      switch (key) {
        case 'required':
          errorMessage = 'Please enter a login email';
          break;
        case 'email':
          errorMessage = 'The login email is invalid';
          break;
        default:
          errorMessage = 'The field is invalid';
      }
    });

    return errorMessage;
  }

  getControlErrors(controlName: string) {
    const formErrors = this.form.controls[controlName].errors;
    if (formErrors) {
      switch (controlName) {
        case 'login':
          return this.getLoginErrors(formErrors);
        case 'password':
          return this.getPasswordErrors(formErrors);
        default:
          return 'The field is invalid';
      }
    }

    return null;
  }
}
