import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireFunctionsModule, REGION} from '@angular/fire/functions';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {ServiceWorkerModule} from '@angular/service-worker';

import {environment} from '../environments/environment';

import {ScullyLibModule} from '@scullyio/ng-lib';

import {AdminComponent} from './pages/admin/admin/admin.component';

@NgModule({
  declarations: [AppComponent, AdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ScullyLibModule.forRoot({
      useTransferState: true,
      alwaysMonitor: true,
    }),
    HttpClientModule,
  ],
  providers: [{provide: REGION, useValue: 'europe-west6'}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
