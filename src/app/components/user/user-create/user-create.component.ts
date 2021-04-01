import { User } from './../../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = {
    cpf: '',
    email: '',
    name: '',
    registration: '',
    password: ''
  }

  
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  cpf = new FormControl('', [Validators.required]);
  matricula = new FormControl('', [Validators.required]);

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  create(): void {
    if(
      this.user.name === '' ||
      this.user.cpf === ''  ||
      this.user.registration === '' ||
      this.user.email === ''
    ) {
      this.getErrorMessage()
      this.userService.showMessage('Algum campo obrigatorio vazio!');
    } else {

      this.userService.create(this.user).subscribe(() => {
        this.userService.showMessage('Usuario criado com sucesso!');
        this.router.navigate(['/users']);
      })
    }

  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'campo não pode ser vazio.';
    } 
    return
  }

}
