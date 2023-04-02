import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  private readonly localStorageName = 'userToken';
  isUserLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  login({ login, password }: User) {
    const token = this.generateUserToken({ login, password });
    localStorage.setItem(this.localStorageName, token);
    this.isUserLoggedIn$.next(true);
    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'videos';
    this.router.navigate([returnUrl]);
  }

  logout() {
    localStorage.removeItem(this.localStorageName);
    this.router.navigate(['auth']);
  }

  generateUserToken({ login, password }: User) {
    return btoa(login + password);
  }

  getUserFromLocalStorage() {
    return localStorage.getItem(this.localStorageName);
  }
}
