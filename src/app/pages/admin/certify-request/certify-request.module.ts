import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CertifyRequestRoutingModule} from './certify-request-routing.module';
import {CertifyRequestComponent} from './certify-request.component';

@NgModule({
  declarations: [CertifyRequestComponent],
  imports: [CommonModule, CertifyRequestRoutingModule],
})
export class CertifyRequestModule {}
