import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(): boolean {
    //set admin
    const requiredRole = 'wiensdavid99@gmail.com';
    const user = localStorage.getItem('user');
    var userData: any = '';
    if (user) {
      userData = JSON.parse(user);
    }
    const userRole = userData.email;
    if (!this.authService.isLoggedIn || userRole !== requiredRole) {
      this.router.navigate(['dashboard']);
    }
    return true;
  }
}
