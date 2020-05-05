import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private httpClient: HttpClient) { }

  isLoggedIn() {
    const token = localStorage.getItem('toknen');
    return token ? true : false;
  }

  login() {
    localStorage.setItem('toknen', '12346');
  }
}
