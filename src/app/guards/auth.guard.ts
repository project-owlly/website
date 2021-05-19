import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';

import {Observable} from 'rxjs';

import {AuthService} from '../services/auth.service';
import {ToastService} from '../services/toast.service';

/*
import {Plugins} from '@capacitor/core';
const {Modals} = Plugins;*/

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(async (resolve, reject) => {
      try {
        const user: firebase.default.User | null = await this.authService.getUser();
        /*console.log(JSON.stringify(user));
        console.log(JSON.stringify(user?.providerId)); // = "firebase"
        console.log(JSON.stringify(user?.providerData)); // = []*/
        if (user && user.emailVerified && !user.isAnonymous) {
          //( || (user?.providerData.length == 0 && user.email == '')) {
          resolve(true);
        } else if (user && user.email == null && !user.isAnonymous) {
          //TODO Identiy EID Login -> check claums
          //login with eid
          console.log(user.getIdToken());

          resolve(true);
        } else if (user && !user.emailVerified) {
          /*let promptRet = await Modals.confirm({
            title: 'owlly: E-Mail Adresse nicht verifiziert',
            message: 'Nochmals eine Verifikations E-Mail senden?',
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
          }*/

          /*const {ToastComponent} = await import('../components/toast/toast.component');
          await this.toastService.open(ToastComponent, {
            msg: 'Bitte verifiziere zuerst deine E-Mail Adresse. Prüfe deinen Posteingang/Spam Ordner.',
            status: 'error',
            position: 'bottom',
          });*/
          await this.authService.logout();
          await this.router.navigateByUrl('/login');
          reject('error');
        } else {
          await this.router.navigateByUrl('/login');
          reject('error');
        }
      } catch (error) {}
    });
  }
}
