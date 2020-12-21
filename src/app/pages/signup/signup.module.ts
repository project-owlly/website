import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignupRoutingModule} from './signup-routing.module';
import {SignupComponent} from './signup.component';

import {ComponentsModule} from 'src/app/components/core/components.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, SignupRoutingModule, ComponentsModule],
})
export class SignupModule {}
