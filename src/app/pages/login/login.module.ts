import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';

import {LoginRoutingModule} from './login-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, ComponentsModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
