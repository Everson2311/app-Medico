import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.AuthService.getAuth().onAuthStateChanged( user => {
        if (user) this.router.navigate(['home']);

        resolve(!user ? true : false);
      })
    })
  }
}
