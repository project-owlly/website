import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LogoutRoutingModule} from './logout-routing.module';
import {LogoutComponent} from './logout.component';

import {ComponentsModule} from 'src/app/components/core/components.module';

@NgModule({
  declarations: [LogoutComponent],
  imports: [CommonModule, LogoutRoutingModule, ComponentsModule],
})
export class LogoutModule {}
