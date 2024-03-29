import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import { Type } from './../../../models/type.model';
import { Equipment } from './../../../models/equipment.model';
import { EquipmentService } from 'src/app/services/equipment.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-equipment-update',
  templateUrl: './equipment-update.component.html',
  styleUrls: ['./equipment-update.component.css']
})
export class EquipmentUpdateComponent implements OnInit {
  equipment!: Equipment;
  types!: Type[];


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
