import { Router, ActivatedRoute } from '@angular/router';
import { LendingContractService } from 'src/app/services/lending-contract.service';
import { Component, OnInit } from '@angular/core';

import { LendingContract } from './../../../models/lendingContract.model';

@Component({
  selector: 'app-lending-contract-delete',
  templateUrl: './lending-contract-delete.component.html',
  styleUrls: ['./lending-contract-delete.component.css']
})
export class LendingContractDeleteComponent implements OnInit {

  lendingContact!: LendingContract;

  constructor(
    private lendingContractService: LendingContractService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.lendingContractService.show(id as string).subscribe(lendingContract => {
      this.lendingContact = lendingContract;
    });
  }

  delete(): void {
    this.lendingContractService.delete(this.lendingContact?.id as string).subscribe(() => {
      this.lendingContractService.showMessage('Equipamento exclido com sucesso!');
      this.router.navigate(['/contracts']);
    })
  }

  cancel(): void {
    this.router.navigate(['/contracts']);
  }
}
