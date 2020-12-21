import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SignupRoutingModule} from './signup-routing.module';
import {SignupComponent} from './signup.component';

import {ComponentsModule} from 'src/app/components/core/components.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, SignupRoutingModule, ComponentsModule, FormsModule, ReactiveFormsModule],
})
export class SignupModule {}
