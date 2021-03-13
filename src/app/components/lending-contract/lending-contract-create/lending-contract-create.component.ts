import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Equipment } from './../../equipment/equipment.model';
import { User } from './../../user/user.model';
import { LendingContract } from '../lendingContract.model';

import { UserService } from './../../user/user.service';
import { LendingContractService } from './../lending-contract.service';
import { EquipmentService } from './../../equipment/equipment.service';

@Component({
  selector: 'app-lending-contract-create',
  templateUrl: './lending-contract-create.component.html',
  styleUrls: ['./lending-contract-create.component.css']
})
export class LendingContractCreateComponent implements OnInit {
  equipments!: Equipment[];
  users!: User[]
  lendingContract: LendingContract = {
    user_id: '',
    equipment_id: '',
  }

  constructor(
    private equipmentService: EquipmentService,
    private userService: UserService,
    private lendingContractService: LendingContractService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.index().subscribe(user => {
      this.users = user;
    });

    this.equipmentService.index().subscribe(equipment => {
      this.equipments = equipment;
    });
  }

  create(): void {
    this.lendingContractService.create(this.lendingContract).subscribe(() => {
      this.lendingContractService.showMessage('Contrato de comodato criado com sucesso!');
      this.router.navigate(['/contracts'])
    })
  }

  cancel(): void {
    this.router.navigate(['/contracts']);
  }

}
