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
      console.log('no code');
      return this.router.createUrlTree(['/']);
    }

    if (!configuration) {
      console.log('no configuration');
      return this.router.createUrlTree(['/']);
    }

    this.oidcService
      .getEidLogin(code, configuration)
      .pipe(first())
      .subscribe(async (customToken: any) => {
        //console.log(data);

        const userCredential = await this.auth.loginWithToken(customToken);
        console.log('user credentials ' + JSON.stringify(userCredential));
        if (userCredential.user) {
          return this.router.createUrlTree(['/admin']);
        } else {
          return this.router.createUrlTree(['/']);
        }
      });

    return false;
  }
}
