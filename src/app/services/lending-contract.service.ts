import { BACKEND_API } from './../app.api';
import { LendingContract } from './../models/lendingContract.model';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LendingContractService {
  basUrl = `${BACKEND_API}/contracts`;

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

  index(): Observable<LendingContract[]> {
    return this.http.get<LendingContract[]>(this.basUrl).pipe(
      map(obj => obj),
      catchError(e => this.handelError(e))
    );
  }

  create(lendingContract: LendingContract): Observable<LendingContract> {
    return this.http.post<LendingContract>(this.basUrl, lendingContract).pipe(
      map(obj => obj),
      catchError(e => this.handelError(e))
    );
  }

  show(id: string): Observable<LendingContract> {
    const url = `${this.basUrl}/${id}`;
    return this.http.get<LendingContract>(url).pipe(
      map(obj => obj),
      catchError(e => this.handelError(e))
    );
  }

  update(lendingContract: LendingContract): Observable<LendingContract> {
    const url = `${this.basUrl}/${lendingContract.id}`;
    return this.http.put<LendingContract>(url, lendingContract).pipe(
      map(obj => obj),
      catchError(e => this.handelError(e))
    );
  }

  delete(id: string): Observable<LendingContract> {
    const url = `${this.basUrl}/${id}`;
    return this.http.delete<LendingContract>(url).pipe(
      map(obj => obj),
      catchError(e => this.handelError(e))
    );
  }

  download(id: string): Observable<LendingContract> {
    console.log(id);
    const url = `${this.basUrl}/create/${id}`;
    return this.http.get<LendingContract>(url).pipe(
      map(obj => obj),
      catchError(e => this.handelError(e))
    );
  }

  handelError(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  };
}
