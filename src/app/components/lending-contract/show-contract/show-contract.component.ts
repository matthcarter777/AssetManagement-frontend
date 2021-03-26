import { Router, ActivatedRoute } from '@angular/router';
import { LendingContractService } from 'src/app/services/lending-contract.service';
import { Component, OnInit } from '@angular/core';

import { LendingContract } from './../../../models/lendingContract.model';


@Component({
  selector: 'app-show-contract',
  templateUrl: './show-contract.component.html',
  styleUrls: ['./show-contract.component.css']
})
export class ShowContractComponent implements OnInit {
  
  lendingContact!: LendingContract;

  constructor(
    private lendingContractService: LendingContractService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.lendingContractService.showContract(id as string).subscribe(lendingContract => {
      this.lendingContact = lendingContract;
    });
  }

  goToPagePrint(): void {
    const content = document.getElementById('printContainer')?.innerHTML;
    const  screenToPrint = window.open();

    screenToPrint?.document.write(content as string);
  }

  cancel(): void {
    this.router.navigate(['/contracts']);
  }

  printer() {

  }

}
