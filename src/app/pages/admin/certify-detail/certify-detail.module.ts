import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CertifyDetailRoutingModule} from './certify-detail-routing.module';
import {CertifyDetailComponent} from './certify-detail.component';

@NgModule({
  declarations: [CertifyDetailComponent],
  imports: [CommonModule, CertifyDetailRoutingModule],
})
export class CertifyDetailModule {}
