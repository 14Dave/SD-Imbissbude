import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  role: any = '';

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.role = this.authService.defineRole();
  }

  updated() {
    this.ngOnInit();
  }
}
