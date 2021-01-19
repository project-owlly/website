import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SupportComponent} from './support.component';

import {SupportPageRoutingModule} from './support-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, SupportPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [SupportComponent],
})
export class SupportPageModule {}
