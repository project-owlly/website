import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VerifyRoutingModule} from './verify-routing.module';
import {VerifyComponent} from './verify.component';
import {ComponentsModule} from 'src/app/components/core/components.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [VerifyComponent],
  imports: [CommonModule, VerifyRoutingModule, ComponentsModule, FontAwesomeModule],
})
export class VerifyModule {}
