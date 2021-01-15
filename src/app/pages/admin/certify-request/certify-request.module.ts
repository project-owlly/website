import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CertifyRequestRoutingModule} from './certify-request-routing.module';
import {CertifyRequestComponent} from './certify-request.component';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [CertifyRequestComponent],
  imports: [CommonModule, CertifyRequestRoutingModule, ComponentsModule, FontAwesomeModule],
})
export class CertifyRequestModule {}
