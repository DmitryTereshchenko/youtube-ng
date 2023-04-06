import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    const { login, token } = this.authService.getUserFromLocalStorage();

    if (login && token) {
      this.authService.isUserLoggedIn$.next(true);
      return true;
    }

    this.router.navigate(['auth'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
