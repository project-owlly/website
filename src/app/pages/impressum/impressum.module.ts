import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ImpressumPageRoutingModule} from './impressum-routing.module';

import {ImpressumComponent} from './impressum.component';
import {ComponentsModule} from '../../components/core/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, ImpressumPageRoutingModule, ComponentsModule],
  declarations: [ImpressumComponent],
})
export class ImpressumPageModule {}
