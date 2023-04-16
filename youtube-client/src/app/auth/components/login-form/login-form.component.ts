import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators
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
}
