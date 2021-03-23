import { Component, OnInit } from '@angular/core';

import { EquipmentService } from 'src/app/services/equipment.service';
import { Equipment } from './../../../models/equipment.model';

@Component({
  selector: 'app-equipment-index',
  templateUrl: './equipment-index.component.html',
  styleUrls: ['./equipment-index.component.css']
})
export class EquipmentIndexComponent implements OnInit {
  equipments!: Equipment[];
  displayedColumns= ['description','identification','type','isAvailable', 'action']

  constructor(
    private equipmentService: EquipmentService
  ) { }

  ngOnInit(): void {
    this.equipmentService.index().subscribe(equipments => {
      this.equipments = equipments;
    });
  }

}
