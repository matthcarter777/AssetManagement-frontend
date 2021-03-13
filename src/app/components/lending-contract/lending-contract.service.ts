import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { LendingContract } from './lendingContract.model';

@Injectable({
  providedIn: 'root'
})
export class LendingContractService {
  basUrl = 'http://localhost:3333/contracts';

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

  handelError(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  };
}
