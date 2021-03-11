import { User } from './../user.model';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Usuario criado com sucesso!');
      this.router.navigate(['/users']);
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
