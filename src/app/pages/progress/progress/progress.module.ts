import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProgressComponent} from './progress.component';

import {ProgressPageRoutingModule} from './progress-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, ProgressPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [ProgressComponent],
})
export class ProgressPageModule {}
