import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {OidcService} from '../services/oidc.service';

@Injectable({
  providedIn: 'root',
})
export class EidLoginGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService, private oidcService: OidcService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const code: string | null = route.queryParamMap.get('code');
    const configuration: 'sh' | 'zg' = route.queryParamMap.get('configuration') as 'sh' | 'zg';

    if (!code) {
      return this.router.createUrlTree(['/']);
    }

    if (!configuration) {
      return this.router.createUrlTree(['/']);
    }

    this.oidcService
      .getEidLogin(code, configuration)
      .pipe(first())
      .subscribe((data: any) => {
        //console.log(data);

        this.auth.loginWithToken(data.token).then(
          (userCredential) => {
            var user = userCredential.user;
            console.log(user);
            this.router.navigateByUrl('/admin');
          },
          async (err) => {
            console.log('error: ' + JSON.stringify(err));
          }
        );
      });

    return false;
  }
}
