import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProgressBundComponent} from './progress-bund.component';

import {ProgressBundPageRoutingModule} from './progress-bund-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, ProgressBundPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [ProgressBundComponent],
})
export class ProgressBundPageModule {}
