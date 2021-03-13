import { LendingContractService } from './../lending-contract.service';
import { Component, OnInit } from '@angular/core';

import { LendingContract } from '../lendingContract.model';

@Component({
  selector: 'app-lending-contract-index',
  templateUrl: './lending-contract-index.component.html',
  styleUrls: ['./lending-contract-index.component.css']
})
export class LendingContractIndexComponent implements OnInit {
  lendingContracts!: LendingContract[];
  displayedColumns= ['date','name','cpf','registration','equipment','identification','action']

  constructor(
    private lendingContractService: LendingContractService
  ) { }

  ngOnInit(): void {
    this.lendingContractService.index().subscribe(lendingContracts => {
      this.lendingContracts = lendingContracts;
    });

  }

}
