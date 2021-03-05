import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-equipment-update',
  templateUrl: './equipment-update.component.html',
  styleUrls: ['./equipment-update.component.css']
})
export class EquipmentUpdateComponent implements OnInit {

  constructor(
    private equipmentService: EquipmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['/equipments']);
  }

}
