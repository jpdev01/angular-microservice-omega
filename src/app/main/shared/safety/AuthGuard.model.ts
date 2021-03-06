import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> {
  //   return this.authService.isLoggedIn
  //     .pipe(
  //       take(1),
  //       map((isLoggedIn: boolean) => {
  //         if (!isLoggedIn){
  //           this.router.navigate(['/login']);
  //           return false;
  //         }
  //         return true;
  //       })
  //     );
  // }

  // Uma outra maneira de fazer essa validacao seria ir ate a api e verificar se a session do usuario existe

  canActivate(): boolean{
    if (this.authService.tokenAvailable()) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}

