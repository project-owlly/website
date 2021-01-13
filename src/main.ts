import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import {applyPolyfills, defineCustomElements} from '@deckdeckgo/qrcode/dist/loader';
import {defineCustomElements as defineCustomElementsIonic} from '@ionic/pwa-elements/loader';
import {defineCustomElements as defineCustomElementsSocialShare} from 'web-social-share/dist/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// B. We load our component
applyPolyfills().then(() => {
  defineCustomElements(window);
});
defineCustomElementsSocialShare(window);
defineCustomElementsIonic(window);
