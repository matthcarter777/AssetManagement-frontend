import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LendingContract } from './../../../models/lendingContract.model';

import { UserService } from 'src/app/services/user.service';
import { TokenService } from './../../../services/token.service';
import { LendingContractService } from 'src/app/services/lending-contract.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-show-contract',
  templateUrl: './show-contract.component.html',
  styleUrls: ['./show-contract.component.css']
})
export class ShowContractComponent implements OnInit {
  
  lendingContact!: LendingContract;
  name!: string;

  constructor(
    private lendingContractService: LendingContractService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private tokenService: TokenService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.lendingContractService.showContract(id as string).subscribe(lendingContract => {
      this.lendingContact = lendingContract;
    });

    const token = this.authService.get()
    const decodedToken = this.tokenService.payload(token);

    const userId = decodedToken.sub;

    this.userService.show(userId).subscribe(user => {
      this.name = user.name;
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
