import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TypeService } from 'src/app/services/type.service';
import { Type } from './../../../models/type.model';

@Component({
  selector: 'app-type-create',
  templateUrl: './type-create.component.html',
  styleUrls: ['./type-create.component.css']
})
export class TypeCreateComponent implements OnInit {

  formType!: FormGroup;
  type: Type = {
    name: ''
  }

  constructor(
    private typeService: TypeService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFormType();
  }
 
  createFormType() {
    this.formType = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
      ],
    });
  }

  createType(): void {
    if ( this.type.name !== '' ) {
      this.typeService.create(this.type).subscribe(( type ) => {
        this.typeService.showMessage('Categoria criada com sucesso!');
        this.router.navigate(['/categories']);
      });  
    }
    this.typeService.showMessage('Nome não pode ser vazio!');
  }

  cancel(): void {
    this.router.navigate(['/categories']);
  }

}
