import { AuthService } from './components/login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showMenus: boolean = false;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.showMenusEmitter.subscribe( (show: boolean) => 
      this.showMenus = show 
    );
  }
}
