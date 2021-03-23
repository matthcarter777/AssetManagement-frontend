import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../../models/user.model';
import { Equipment } from './../../../models/equipment.model';
import { LendingContract } from './../../../models/lendingContract.model';

import { UserService } from 'src/app/services//user.service';
import { LendingContractService } from 'src/app/services/lending-contract.service';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-lending-contract-create',
  templateUrl: './lending-contract-create.component.html',
  styleUrls: ['./lending-contract-create.component.css']
})
export class LendingContractCreateComponent implements OnInit {
  equipments!: Equipment[];
  equipmentsFiltered!: Equipment[];
  users!: User[]
  lendingContract: LendingContract = {
    user_id: '',
    equipment_id: '',
    cpf: '',
    date: '',
    equipment: '',
    identification: '',
    name: '',
    registration: '',
    id: ''
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
      this.equipmentsFiltered = this.equipments.filter(equipmentFil => equipmentFil.isAvailable === true);
      console.log(this.equipmentsFiltered);
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
