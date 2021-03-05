import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Equipment } from './../equipment.model';
import { EquipmentService } from '../equipment.service';
import  { Type } from '../../type/type.model';
import { TypeService } from './../../type/type.service';

@Component({
  selector: 'app-equipment-update',
  templateUrl: './equipment-update.component.html',
  styleUrls: ['./equipment-update.component.css']
})
export class EquipmentUpdateComponent implements OnInit {
  equipment: Equipment | undefined;
  types: Type[] | undefined;


  constructor(
    private equipmentService: EquipmentService,
    private router: Router,
    private route: ActivatedRoute,
    private typeService: TypeService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.equipmentService.show(id as string).subscribe(equipment => {
      this.equipment = equipment
    })

    this.typeService.index().subscribe(types => {
      this.types = types
    })
  }

  update(): void {
    this.equipmentService.update(this.equipment as Equipment).subscribe(() => {
      this.equipmentService.showMessage('Equipamento alterado com sucesso!');
      this.router.navigate(['/equipments']);
    });
  }


  cancel(): void {
    this.router.navigate(['/equipments']);
  }

}
