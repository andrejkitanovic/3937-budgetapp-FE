import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  message: String;

  constructor(public authService: AuthService, private router: Router) {
    this.message = '';
  }

  ngOnInit(): void {}

  register(
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) {
    if (password !== confirmPassword) {
      this.message = 'Passwords must match';
      return;
    }
    this.authService.register(
      username,
      email,
      password,
      () => (this.message = ''),
      (err: any) => (this.message = err)
    );
  }
}
