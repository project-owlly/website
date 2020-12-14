import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProgressCantonsComponent} from './progress-cantons.component';

import {ProgressCantonsPageRoutingModule} from './progress-cantons-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ProgressCantonsPageRoutingModule, ComponentsModule, FontAwesomeModule, FormsModule],
  declarations: [ProgressCantonsComponent],
})
export class ProgressCantonsPageModule {}
