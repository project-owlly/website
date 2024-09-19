import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {getFunctions, provideFunctions} from '@angular/fire/functions';
import {FirestoreModule, getFirestore, provideFirestore} from '@angular/fire/firestore';

import {ServiceWorkerModule} from '@angular/service-worker';

import {environment} from '../environments/environment';

import {ScullyLibModule} from '@scullyio/ng-lib';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {getAuth, provideAuth} from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => {
      const init = initializeApp(environment.firebaseConfig);
      return init;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();
      return firestore;
    }),
    provideAuth(() => {
      return getAuth();

      // const auth = getAuth();
      // setPersistence(auth,browserSessionPersistence);
      // return auth;
    }),
    provideFunctions(() => getFunctions()),
    FirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ScullyLibModule.forRoot({
      useTransferState: true,
      alwaysMonitor: true,
    }),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  // providers: [{provide: REGION, useValue: 'europe-west6'}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
