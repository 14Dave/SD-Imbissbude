import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  role: any = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.role = this.authService.defineRole();
  }

  ngOnChanges() {
    this.ngOnInit();
  }
}
