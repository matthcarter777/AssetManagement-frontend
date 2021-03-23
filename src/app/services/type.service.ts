import { BACKEND_API } from './../app.api';
import { Type } from './../models/type.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  basUrl = `${BACKEND_API}/types`;

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

  index(): Observable<Type[]> {
    return this.http.get<Type[]>(this.basUrl).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  };

  create(type: Type): Observable<Type> {
    return this.http.post<Type>(this.basUrl, type).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  };

  show(id: string): Observable<Type> {
    const url = `${this.basUrl}/${id}`;
    return this.http.get<Type>(url).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  };

  update(type: Type): Observable<Type> {
    const url = `${this.basUrl}/${type.id}`;
    return this.http.put<Type>(url, type).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  };

  delete(id: string): Observable<Type> {
    const url = `${this.basUrl}/${id}`;
    return this.http.delete<Type>(url).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  };

  handleError(e: any): Observable<any> {
    this.showMessage('Ocorreu um Erro!', true);
    return EMPTY;
  };

}
