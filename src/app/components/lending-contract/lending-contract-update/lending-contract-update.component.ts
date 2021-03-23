import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { Equipment } from './../../../models/equipment.model';
import { User } from './../../../models/user.model';
import { LendingContract } from './../../../models/lendingContract.model';

import { LendingContractService } from 'src/app/services/lending-contract.service';
import { EquipmentService } from 'src/app/services/equipment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lending-contract-update',
  templateUrl: './lending-contract-update.component.html',
  styleUrls: ['./lending-contract-update.component.css']
})
export class LendingContractUpdateComponent implements OnInit {
  equipments!: Equipment[];
  users!: User[]
  lendingContract!: LendingContract;

  constructor(
    private equipmentService: EquipmentService,
    private userService: UserService,
    private lendingContractService: LendingContractService,
    private router: Router,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.userService.index().subscribe(user => {
      this.users = user;
    });

    this.equipmentService.index().subscribe(equipment => {
      this.equipments = equipment;
    });

    this.lendingContractService.show(id as string).subscribe(lendingContract => {
      this.lendingContract = lendingContract;
    });
  }

  update(): void {
    console.log(this.lendingContract)
    this.lendingContractService.update(this.lendingContract as LendingContract).subscribe(() => {
      this.lendingContractService.showMessage('Equipamento alterado com sucesso!');
      this.router.navigate(['/contracts']);
    });
  }

  cancel(): void {
    this.router.navigate(['/contracts']);
  }

}
