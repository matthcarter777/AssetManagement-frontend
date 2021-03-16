import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basUrl = 'http://localhost:3333/login';

  private authenticated: boolean = false;

  showMenusEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }


  login(user: User ) {
    if ( user.email === 'm@m.com' && user.password === '12345' ) {
      this.authenticated = true;

      this.showMenusEmitter.emit(true);
      
      this.router.navigate(['/']);
    } else {
      this.authenticated = false;
      this.showMenusEmitter.emit(false);
    }
  }

  userAuthenticated() {
    return this.authenticated;
  }
}
