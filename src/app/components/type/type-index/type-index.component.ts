import { Component, OnInit } from '@angular/core';

import { TypeService } from 'src/app/services/type.service';
import { Type } from '../type.model';

@Component({
  selector: 'app-type-index',
  templateUrl: './type-index.component.html',
  styleUrls: ['./type-index.component.css']
})
export class TypeIndexComponent implements OnInit {
  types!: Type[];
  displayedColumns= ['name', 'action']

  constructor(
    private typeService: TypeService
  ) { }

  ngOnInit(): void {
    this.typeService.index().subscribe(types => {
      this.types = types
      console.log(types);
    });
  }

}
