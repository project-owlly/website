import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';

import {LoginRoutingModule} from './login-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, ComponentsModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
