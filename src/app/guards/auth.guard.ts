import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot)
    : Observable<boolean> | boolean{

    console.log(this.authService.userAuthenticated())
    
    if (this.authService.userAuthenticated()) {
        return true;
    }

    this.router.navigate(['/login']);
    
    return false;
  }
}
