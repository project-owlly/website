import {Injectable} from '@angular/core';
import {AngularFireFunctions} from '@angular/fire/functions';

import {Observable} from 'rxjs';

import {OidcAuth, OidcAuthDataRequest, OidcAuthLoginDataRequest} from '../types/oidc';
import {EidDataRequest, EidUserData} from '../types/eid';

@Injectable({
  providedIn: 'root',
})
export class OidcService {
  constructor(private functions: AngularFireFunctions) {}

  getAuthUrl(owllyId: string, configuration: string): Observable<OidcAuth | undefined> {
    const callable: (data: OidcAuthDataRequest) => Observable<OidcAuth | undefined> = this.functions.httpsCallable<OidcAuthDataRequest, OidcAuth | undefined>(
      'OIDAuthUrl'
    );
    return callable({owllyId, configuration} as OidcAuthDataRequest);
  }

  getAuthUrlLogin(): Observable<OidcAuth | undefined> {
    const callable: (data: OidcAuthLoginDataRequest) => Observable<OidcAuth | undefined> = this.functions.httpsCallable<
      OidcAuthLoginDataRequest,
      OidcAuth | undefined
    >('OIDAuthUrlLogin');
    return callable({} as OidcAuthLoginDataRequest);
  }

  getEidLogin(token: string): Observable<string | undefined> {
    const callable: (data: EidDataRequest) => Observable<string | undefined> = this.functions.httpsCallable<EidDataRequest, string | undefined>('eidLogin');
    return callable({authorization_code: token} as EidDataRequest);
  }

  getEidUserData(token: string, configuration: 'sh' | 'zg'): Observable<EidUserData | undefined> {
    const callable: (data: EidDataRequest) => Observable<EidUserData | undefined> = this.functions.httpsCallable<EidDataRequest, EidUserData | undefined>(
      'eidData'
    );
    return callable({authorization_code: token, configuration: configuration} as EidDataRequest);
  }
}
