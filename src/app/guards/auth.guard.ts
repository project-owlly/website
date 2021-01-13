import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';

import {Observable} from 'rxjs';

import {AuthService} from '../services/auth.service';
import {ToastService} from '../services/toast.service';

import {Plugins} from '@capacitor/core';

const {Modals} = Plugins;

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.authService.getUser().catch((err) => {
          console.log('Fehler: ' + err);
        });
        if (user && !user.isAnonymous) {
          resolve(true);

        } else if (user && !user.emailVerified) {
          let promptRet = await Modals.confirm({
            title: 'E-Mail Adresse zuerst verifizieren',
            message: 'Sollen wir dir eine neue Verifikation senden?',
          });
          if (promptRet.value === true) {
            user
              .sendEmailVerification({
                url: String(window.location),
              })
              .then(
                (ok) => {
                  //console.log('sendEmailVerification');
                },
                (error) => {
                  //console.log('Error sendEmailVerification');
                }
              );
          } else {
          }

          /*const {ToastComponent} = await import('../components/toast/toast.component');

          await this.toastService.open(ToastComponent, {
            msg: 'Bitte verifiziere zuerst deine E-Mail Adresse. Prüfe deinen Posteingang/Spam Ordner.',
            status: 'error',
            position: 'bottom',
          });*/
          this.authService.logout();
          this.router.navigateByUrl('/login');
          reject('error');*/
        } else {
          this.router.navigateByUrl('/login');
          reject('error');
        }
      } catch (error) {}
    });
  }
}
