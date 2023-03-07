import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  constructor(public authService: AuthService) {}

  register() {
    if (this.email == '') {
      alert('bitte Email eingeben');
      return;
    }

    if (this.password == '') {
      alert('bitte Passwort eingeben');
      return;
    }

    this.authService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
