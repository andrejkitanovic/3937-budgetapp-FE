import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from '../config/axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(
    email: string,
    password: string,
    successCallback: Function,
    errorCallback: Function
  ): void {
    axios
      .post('/auth/login', { email, password })
      .then(({ data }) => {
        localStorage.setItem('jwToken', data?.token);
        this.getUser();
        successCallback();
      })
      .catch(({ response }) => {
        errorCallback(response?.data?.message);
      });
  }

  register(
    username: string,
    email: string,
    password: string,
    successCallback: Function,
    errorCallback: Function
  ): void {
    axios
      .post('/auth/register', { username, email, password })
      .then(() => {
        this.router.navigate(['/login']);
        successCallback();
      })
      .catch(({ response }) => {
        errorCallback(response?.data?.message);
      });
  }

  updateProfile(
    username: string,
    email: string,
    successCallback: Function,
    errorCallback: Function
  ) {
    axios
      .put('/profile', { username, email })
      .then(({ data }) => {
        localStorage.setItem('activeUser', JSON.stringify(data?.data));
        successCallback(data?.data);
      })
      .catch(({ response }) => {
        errorCallback(response?.data?.message);
      });
  }

  deleteProfile() {
    axios
      .delete('/profile')
      .then(({ data }) => {
        this.logout();
        this.router.navigate(['/login']);
      })
      .catch(({ response }) => {});
  }

  getUser(): any {
    if (!localStorage.getItem('jwToken')) return null;

    axios
      .get('/auth/me')
      .then(({ data }) => {
        localStorage.setItem('activeUser', JSON.stringify(data.data));
        this.router.navigate(['/']);
      })
      .catch(({ response }) => {
        this.router.navigate(['/login']);
      });
  }

  isLoggedIn(): boolean {
    const userFromStorage = localStorage.getItem('activeUser');
    return userFromStorage !== null;
  }

  logout(): any {
    localStorage.clear();
  }
}
