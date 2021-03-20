import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/userLogin.model';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLogin = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.user);
  }
}
