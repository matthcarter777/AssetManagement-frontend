import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCreateEquipment(): void {
    this.router.navigate(['/equipments/create']);
  }

  cancel(): void {
    this.router.navigate(['/equipments']);
  }

}
