import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from '../components/dashboard/dashboard.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  basUrl = 'http://localhost:3333/dashboard';


  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.basUrl)
  }
}
