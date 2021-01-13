import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CertifyDetailRoutingModule} from './certify-detail-routing.module';
import {CertifyDetailComponent} from './certify-detail.component';

import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [CertifyDetailComponent],
  imports: [CommonModule, CertifyDetailRoutingModule, ComponentsModule, FontAwesomeModule],
})
export class CertifyDetailModule {}
