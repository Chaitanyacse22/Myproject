import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Authenticated = false;
  constructor() { }

  setAuthentication(){
    this.Authenticated = true;
  }

  setAuthenticationFalse(){
    this.Authenticated = false;
  }

  isAuthenticated(){
    return this.Authenticated;
  }
}
