import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lending-contract',
  templateUrl: './lending-contract.component.html',
  styleUrls: ['./lending-contract.component.css']
})
export class LendingContractComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToLendingContractCreate(): void {
    this.router.navigate(['contracts/create']);
  }

}
