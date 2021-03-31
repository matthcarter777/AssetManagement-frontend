import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TypeService } from 'src/app/services/type.service';
import { Type } from './../../../models/type.model';

@Component({
  selector: 'app-type-create',
  templateUrl: './type-create.component.html',
  styleUrls: ['./type-create.component.css']
})
export class TypeCreateComponent implements OnInit {

  type: Type = {
    name: ''
  }

  name = new FormControl('', [Validators.required]);

  constructor(
    private typeService: TypeService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {}
 
  createType(): void {
    if ( this.type.name !== '' ) {
      this.typeService.create(this.type).subscribe(( type ) => {
        this.typeService.showMessage('Categoria criada com sucesso!');
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
    this.router.navigate(['/categories']);
  }

}
