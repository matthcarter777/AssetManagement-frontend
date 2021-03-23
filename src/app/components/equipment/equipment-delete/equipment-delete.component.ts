import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Equipment } from './../../../models/equipment.model';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-equipment-delete',
  templateUrl: './equipment-delete.component.html',
  styleUrls: ['./equipment-delete.component.css']
})
export class EquipmentDeleteComponent implements OnInit {
  equipment!: Equipment;

  constructor(
    private equipmentService: EquipmentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.equipmentService.show(id as string).subscribe(equipment => {
      this.equipment = equipment;
    });
  }

  delete(): void {
    this.equipmentService.delete(this.equipment?.id as string).subscribe(() => {
      this.equipmentService.showMessage('Equipamento exclido com sucesso!');
      this.router.navigate(['/equipments']);
    })
  }

  cancel(): void {
    this.router.navigate(['/equipments']);
  }

}
