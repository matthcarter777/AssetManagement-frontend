import { Component, OnInit } from '@angular/core';

import { User } from './../../../models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {
  users!: User[];
  displayedColumns= ['name','cpf','registration','email', 'action']

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.index().subscribe(users => {
      this.users = users
    })
  }

}
