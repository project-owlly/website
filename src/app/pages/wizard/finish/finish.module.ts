import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {FinishPageRoutingModule} from './finish-routing.module';

import {FinishComponent} from './finish.component';

import {ComponentsModule} from '../../../components/core/components.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [FinishComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, FormsModule, FontAwesomeModule, FinishPageRoutingModule, ComponentsModule],
})
export class FinishPageModule {}
