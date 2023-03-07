import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  role: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const requiredRole = 'wiensdavid99@gmail.com';
    const user = localStorage.getItem('user');
    var userData: any = '';
    if (user) {
      userData = JSON.parse(user);
    }
    const userRole = userData.email;
    if (userRole == requiredRole) {
      this.role = 'admin';
    }
    if (userRole !== requiredRole) {
      this.role = 'user';
    }
    if (userRole == null) {
      return;
    }
    return;
  }

  ngOnChanges() {
    this.ngOnInit();
  }
}
