import { BACKEND_API } from './../app.api';
import { User } from './../models/user.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basUrl = `${BACKEND_API}/users`;

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  };

  index(): Observable<User[]> {
    return this.http.get<User[]>(this.basUrl).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.basUrl, user).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }


  show(id: string): Observable<User> {
    const url  = `${this.basUrl}/${id}`
    return this.http.get<User>(url).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  update(user: User): Observable<User> {
    const url  = `${this.basUrl}/${user.id}`
    return this.http.put<User>(url, user).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  delete(id: string): Observable<User> {
    const url  = `${this.basUrl}/${id}`
    return this.http.delete<User>(url).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  handleError(e: any): Observable<any> {
    this.showMessage('Ocorreu um Erro!', true);
    return EMPTY;
  };
}
