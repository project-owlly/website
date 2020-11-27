import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {FinishPageRoutingModule} from './finish-routing.module';

import {FinishComponent} from './finish.component';

import {ComponentsModule} from '../../../components/core/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, FinishPageRoutingModule, ComponentsModule],
  declarations: [FinishComponent],
})
export class FinishPageModule {}
