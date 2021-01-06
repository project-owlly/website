import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PolicyComponent} from './policy.component';

import {PolicyPageRoutingModule} from './policy-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, PolicyPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [PolicyComponent],
})
export class PolicyPageModule {}
