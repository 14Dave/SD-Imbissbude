import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(public authService: AuthService) {}

  forgotPassword() {
    this.authService.ForgotPassword(this.email);
    this.email = '';
  }
}
