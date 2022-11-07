import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageService} from "../services/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class RoutingByRoleGuard implements CanActivate {

  constructor(private storage: TokenStorageService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let role = this.storage.getAuthorities();
    console.log(role)
    if (role == "ROLE_EMPLOYEE") {
      this.router.navigate(['/employee'])
    }
    if (role == "ROLE_EMPLOYER") {
      this.router.navigate(['/employer'])
    }
    return true;
  }

}
