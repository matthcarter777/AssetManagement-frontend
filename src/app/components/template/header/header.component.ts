import { UserService } from 'src/app/services/user.service';
import { TokenService } from './../../../services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name!: string;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    const token = this.authService.get()
    const decodedToken = this.tokenService.payload(token);

    const userId = decodedToken.sub;

    this.userService.show(userId).subscribe(user => {
      this.name = user.name;
    })
  }

  logout() {
    this.authService.logout();
  }
}
