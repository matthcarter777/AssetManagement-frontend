import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user!: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.userService.show(id as string).subscribe( user => {
      this.user = user
    });
  }

  update(): void {
    this.userService.update(this.user as User).subscribe(() => {
      this.userService.showMessage('Usuário atualizado com sucesso!');
      this.router.navigate(['/users']);
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
