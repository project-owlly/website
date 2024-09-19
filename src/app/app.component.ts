import {Component, OnInit} from '@angular/core';

import {SwUpdate} from '@angular/service-worker';

import {first} from 'rxjs/operators';

import {ToastService} from './services/toast.service';

import {Auth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private fAuth: Auth, private swUpdate: SwUpdate, private router: Router, private toastService: ToastService) {}

  async ngOnInit(): Promise<void> {
    await this.checkSwUpdate();

    this.fAuth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
      } else {
        // User is signed out
        //this.router.navigateByUrl('/logout');
      }
    });
  }

  private async checkSwUpdate(): Promise<void> {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    this.swUpdate.available.pipe(first()).subscribe(async () => {
      const {ToastComponent} = await import('./components/toast/toast.component');

      await this.toastService.open(ToastComponent, {
        msg: 'Eine neue Version ist verfügbar. Zum Aktualisieren neu laden.',
        status: 'success',
        position: 'top',
      });
    });

    await this.swUpdate.checkForUpdate();
  }
}
