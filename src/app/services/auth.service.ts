import { BACKEND_API } from './../app.api';
import { Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserLogin } from '../models/userLogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basUrl = `${BACKEND_API}/login`;

  userToken?: string; 

  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { }


  login(user: UserLogin ) {    
    this.http.post<UserLogin>(this.basUrl, user).subscribe( response => {
      this.userToken = response.token;

      if (this.userToken) {              
        localStorage.setItem('token', this.userToken);
        this.showMessage('Bem vindo!');
        this.router.navigate(['/']);
      } else {
        this.remove()
      }
    });
  } 

  logout() {
    this.remove();
    this.router.navigate(['/login']);
  }

  userAuthenticated() {
    const findToken = this.get();

    if( findToken ) {
      return true; 
    } 

    return !!findToken;
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
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
