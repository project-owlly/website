import {Component, OnInit} from '@angular/core';

import {SwUpdate} from '@angular/service-worker';

import {first} from 'rxjs/operators';

import {ToastService} from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private swUpdate: SwUpdate, private toastService: ToastService) {}

  async ngOnInit(): Promise<void> {
    await this.checkSwUpdate();
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
