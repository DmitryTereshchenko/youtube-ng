import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  private readonly localStorageName = 'userData';
  userData!: LocalStorageUser;
  isUserLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  login({ login, password }: User) {
    const token = this.generateUserToken({ login, password });
    this.userData = {
      token,
      login
    };
    localStorage.setItem(this.localStorageName, JSON.stringify(this.userData));
    this.isUserLoggedIn$.next(true);
    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'videos';
    this.router.navigate([returnUrl]);
  }

  logout() {
    localStorage.removeItem(this.localStorageName);
    this.isUserLoggedIn$.next(false);
    this.router.navigate(['auth']);
  }

  generateUserToken({ login, password }: User) {
    return btoa(login + password);
  }

  getUserFromLocalStorage() {
    const localStorageUserData = localStorage.getItem(this.localStorageName);
    if (!localStorageUserData) return {} as LocalStorageUser;

    this.userData = JSON.parse(localStorageUserData);
    return this.userData;
  }
}
