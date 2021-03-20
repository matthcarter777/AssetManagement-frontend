import { Equipment } from './../components/equipment/equipment.model';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  basUrl = 'http://localhost:3333/equipments';

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

  index(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.basUrl).pipe(
      map(obj => obj),
      catchError(e => this.handelError(e))
    );
  };

  create(equipment: Equipment): Observable<Equipment> {
    return this.http.post<Equipment>(this.basUrl, equipment).pipe(
      map(obj => obj),
      catchError(e => this.handelError(e))
    ); 
  };

  show(id: string): Observable<Equipment> {
    const url = `${this.basUrl}/${id}`;
    return this.http.get<Equipment>(url).pipe(
      map(obj => obj),
      catchError(e => this.handelError(e))
    );
  };

  update(equipment: Equipment): Observable<Equipment> {
    const url = `${this.basUrl}/${equipment.id}`;
    return this.http.put<Equipment>(url, equipment).pipe(
      map(obj => obj),
      catchError(e => this.handelError(e))
    );
  };

  delete(id: string): Observable<Equipment> {
    const url = `${this.basUrl}/${id}`;
    return this.http.delete<Equipment>(url).pipe(
      map(obj => obj),
      catchError(e => this.handelError(e))
    );
  };

  handelError(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  };
}
