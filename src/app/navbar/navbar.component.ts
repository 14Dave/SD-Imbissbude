import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  role: any = '';

  constructor(
    private authService: AuthService,
    private data: DataService,
    private router: Router
  ) {
    router.events.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.role = this.authService.defineRole();
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  updated() {
    this.ngOnInit();
  }
}
