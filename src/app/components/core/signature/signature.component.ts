import {Component, Input} from '@angular/core';

import {EMPTY} from 'rxjs';
import {catchError, filter, first, tap} from 'rxjs/operators';

import {OidcAuth} from '../../../types/oidc';

import {OidcService} from '../../../services/oidc.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
})
export class SignatureComponent {
  @Input() owllyId: string | undefined;

  inProgress = false;

  constructor(private oidcService: OidcService) {}

  sign(): void {
    if (!this.owllyId) {
      return;
    }

    this.oidcService
      .getAuthUrl(this.owllyId)
      .pipe(
        tap(() => (this.inProgress = true)),
        filter((auth: OidcAuth | undefined) => auth !== undefined),
        first(),
        catchError((err) => {
          // TODO display an error to user?
          console.error(err);
          return EMPTY;
        })
      )
      .subscribe((auth: OidcAuth | undefined) => {
        window.location.href = (auth as OidcAuth).url;

        this.inProgress = false;
      });
  }
}
