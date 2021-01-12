import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ActionmailGuard implements CanActivate {
  constructor(private authService: AuthService) {}
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
    switch (mode) {
      /*case 'resetPassword':
        // Display reset password handler and UI.
        this.handleResetPassword(auth, actionCode, continueUrl, lang);
        break;
      case 'recoverEmail':
        // Display email recovery handler and UI.
        this.handleRecoverEmail(auth, actionCode, lang);
        break;*/
      case 'verifyEmail':
        // Display email verification handler and UI.
        this.handleVerifyEmail(actionCode);
        break;
      default:
      // Error: invalid mode.
    }
    return true;
  }

  //https://firebase.google.com/docs/auth/custom-email-handler

  handleVerifyEmail(actionCode: string | null) {
    // Localize the UI to the selected language as determined by the lang
    // parameter.
    // Try to apply the email verification code.
    this.authService
      .applyActionCode(actionCode as string)
      .then(function (resp) {
        // Email address has been verified.
        // TODO: Display a confirmation message to the user.
        // You could also provide the user with a link back to the app.
        // TODO: If a continue URL is available, display a button which on
        // click redirects the user back to the app via continueUrl with
        // additional state determined from that URL's parameters.
      })
      .catch(function (error) {
        // Code is invalid or expired. Ask the user to verify their email address
        // again.
      });
  }
}
