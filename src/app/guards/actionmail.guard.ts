import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ActionmailGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Get the action to complete.
    let mode = route.queryParamMap.get('mode');
    // Get the one-time code from the query parameter.
    let actionCode = route.queryParamMap.get('oobCode');
    // (Optional) Get the continue URL from the query parameter if available.
    //let continueUrl = getParameterByName('continueUrl');
    // (Optional) Get the language code if available.
    //let lang = getParameterByName('lang') || 'en';

    // Handle the user management action.
    //https://firebase.google.com/docs/auth/custom-email-handler
    switch (mode) {
      case 'verifyEmail':
        // Display email verification handler and UI.
        this.authService.applyActionCode(actionCode as string).then(
          (ok: any) => {
            return this.router.createUrlTree(['login']);
          },
          (err: any) => {}
        );
        break;
      default:
      // Error: invalid mode.
    }
    return true;
  }
}
