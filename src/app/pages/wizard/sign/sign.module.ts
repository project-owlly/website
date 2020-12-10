import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SignPageRoutingModule} from './sign-routing.module';

import {SignComponent} from './sign.component';
import {ComponentsModule} from '../../../components/core/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, SignPageRoutingModule, ComponentsModule],
  declarations: [SignComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignPageModule {}
