import { Equipment } from './../equipment.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EquipmentService } from './../equipment.service';

/* Type */
import { TypeService } from './../../type/type.service';
import  { Type } from '../../type/type.model';


@Component({
  selector: 'app-equipment-create',
  templateUrl: './equipment-create.component.html',
  styleUrls: ['./equipment-create.component.css']
})
export class EquipmentCreateComponent implements OnInit {
  types: Type[] | undefined;
  equipment: Equipment ={
    description: '',
    identification: '',
    type_id: ''
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
