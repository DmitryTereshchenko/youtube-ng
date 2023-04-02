import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    const userToken = this.authService.getUserFromLocalStorage();

    if (userToken) return true;

    this.router.navigate(['auth'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
