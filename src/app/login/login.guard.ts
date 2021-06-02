import { Injectable } from '@angular/core';
import { AccountService } from '@app/services/account.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';


@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const logged = this.accountService.isLoggedIn();
    if (logged) {
      this.router.navigate(['products']);
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
