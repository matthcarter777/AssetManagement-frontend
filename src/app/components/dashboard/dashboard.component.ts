import { Dashboard } from './../../models/dashboard.model';
import { Component, OnInit } from '@angular/core';

import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData!: Dashboard[];

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.index().subscribe(data => {
      this.dashboardData =  data;
    })
  }

}
