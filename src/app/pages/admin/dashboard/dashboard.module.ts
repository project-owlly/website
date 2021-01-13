import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, FontAwesomeModule, ComponentsModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
