import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private router: Router) { }

  checkLogin(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.checkLogin()) {
      return true;
    }
    alert('Chưa đăng nhập');
    this.router.navigate(['/auth/signin']);
  }
}
