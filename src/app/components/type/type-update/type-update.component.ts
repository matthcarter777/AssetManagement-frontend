import { Router, ActivatedRoute } from '@angular/router';
import { TypeService } from 'src/app/services/type.service';
import { Component, OnInit } from '@angular/core';

import { Type } from './../../../models/type.model';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-type-update',
  templateUrl: './type-update.component.html',
  styleUrls: ['./type-update.component.css']
})
export class TypeUpdateComponent implements OnInit {
  type!: Type;

  name = new FormControl('', [Validators.required]);

  constructor(
    private typeService: TypeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.typeService.show(id as string).subscribe(type => {
      this.type = type
    });
  }

  update(): void {
    if(this.type.name !== '') {
      this.typeService.update(this.type as Type).subscribe(() => {
        this.typeService.showMessage('Categoria alterada com sucesso!');
        this.router.navigate(['/categories']);
      });
    }
    this.typeService.showMessage('Nome não pode ser vazio!');
  }

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Nome não pode ser vazio!';
    }
    return;
  }

  cancel(): void {
    this.router.navigate(["/categories"]);
  }

}
