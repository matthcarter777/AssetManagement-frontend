import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EquipmentService } from 'src/app/services/equipment.service';
import { TypeService } from 'src/app/services/type.service';
import { Type } from './../../../models/type.model';
import { Equipment } from './../../../models/equipment.model';


@Component({
  selector: 'app-equipment-create',
  templateUrl: './equipment-create.component.html',
  styleUrls: ['./equipment-create.component.css']
})
export class EquipmentCreateComponent implements OnInit {
  types!: Type[];
  equipment: Equipment ={
    description: '',
    identification: '',
    type_id: '',
    available: '',
    isAvailable: false,
    type: '',
  };
  
  constructor(
    private equipmentService: EquipmentService,
    private typeService: TypeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.typeService.index().subscribe(types => {
      this.types = types
    })
  }

  create(): void {
    this.equipmentService.create(this.equipment as Equipment).subscribe(() => {
      this.equipmentService.showMessage('Equipamento criado com sucesso!');
      this.router.navigate(['/equipments']);
    });
  }

  cancel(): void {
    this.router.navigate(['/equipments']);
  }
}
