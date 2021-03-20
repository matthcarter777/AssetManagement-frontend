import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TypeService } from 'src/app/services/type.service';
import { Type } from '../type.model';

@Component({
  selector: 'app-type-create',
  templateUrl: './type-create.component.html',
  styleUrls: ['./type-create.component.css']
})
export class TypeCreateComponent implements OnInit {

  type: Type = {
    name: ''
  }

  constructor(
    private typeService: TypeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createType(): void {
    this.typeService.create(this.type).subscribe(() => {
      this.typeService.showMessage('Categoria criada com sucesso!');
      this.router.navigate(['/categories']);
    })
  }

  cancel(): void {
    this.router.navigate(['/categories']);
  }

}
