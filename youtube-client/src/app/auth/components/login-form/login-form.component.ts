import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import {RouterStateSnapshot} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private authService: AuthService) {
  }

  login(form: NgForm) {
    const { login, password } = form.form.value;
    const newUser: User = { login, password };
    this.authService.login(newUser);
  }
}
