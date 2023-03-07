import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  role: string = 'user';

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
    return;
  }
}
