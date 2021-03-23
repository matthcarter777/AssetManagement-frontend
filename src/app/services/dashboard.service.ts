import { BACKEND_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Dashboard } from './../models/dashboard.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  basUrl = `${BACKEND_API}/dashboard`;


  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(this.basUrl)
  }
}
