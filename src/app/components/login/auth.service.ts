import { Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basUrl = 'http://localhost:3333/login';

  private authenticated: boolean = false;
  userToken?: string; 

  showMenusEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { }


  login(user: User ) {    
    this.http.post<User>(this.basUrl, user).subscribe( userLogin => {
      this.userToken = userLogin.token;

      if (this.userToken) {
        this.authenticated = true;
        
        this.showMenusEmitter.emit(true);
        
        this.showMessage(`Bem Vindo!`);
              
        localStorage.setItem('token', this.userToken);
        
        this.router.navigate(['/']);
      } else {
        this.authenticated = false;
        this.showMessage(`Email/Senha incorreto!`)
        this.showMenusEmitter.emit(false);
      }
    });
  } 

  logout() {
    this.authenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  userAuthenticated() {
    return this.authenticated; 
  }

  get() {
    const token = localStorage.getItem('token');

    if(!token) {
      this.authenticated = false;
    }

    this.authenticated = true;

    return this.authenticated;
  }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  };

  handelError(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  };
}
