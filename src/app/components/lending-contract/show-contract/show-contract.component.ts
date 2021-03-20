import { LendingContract } from './../lendingContract.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LendingContractService } from 'src/app/services/lending-contract.service';
import { Component, OnInit } from '@angular/core';

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

    this.lendingContractService.show(id as string).subscribe(lendingContract => {
      this.lendingContact = lendingContract;
    });
  }

  download(): void {
    console.log(this.lendingContact)

    this.lendingContractService.download(this.lendingContact?.id as string).subscribe(() => {
      this.lendingContractService.showMessage('Download efetuado com sucesso!');
      this.router.navigate(['/contracts']);
    })
  }

  cancel(): void {
    this.router.navigate(['/contracts']);
  }

}
