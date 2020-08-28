import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.AuthService.getAuth().onAuthStateChanged( user => {
        if (!user) this.router.navigate(['login']);

        resolve(user ? true : false);
      })
    })
  }
}
