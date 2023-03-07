import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  constructor(public authService: AuthService) {}

  login() {
    if (this.email == '') {
      alert('bitte Email eingeben');
      return;
    }

    if (this.password == '') {
      alert('bitte Passwort eingeben');
      return;
    }

    this.authService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
