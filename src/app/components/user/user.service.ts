import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from './user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basUrl = 'http://localhost:3333/users';

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

  handleError(e: any): Observable<any> {
    this.showMessage('Ocorreu um Erro!', true);
    return EMPTY;
  };
}
