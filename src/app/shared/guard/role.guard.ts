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
  canActivate(route: ActivatedRouteSnapshot): boolean {
    //set admin
    const requiredRole = 'wiensdavid99@gmail.com';
    const user = localStorage.getItem('user');
    const userData: any = '';
    if (user) {
      const userData = JSON.parse(user);
      return userData;
    }
    const userRole = userData.email;
    if (!this.authService.isLoggedIn || userRole !== requiredRole) {
      this.router.navigate(['dashboard']);
    }
    return true;
  }
}
