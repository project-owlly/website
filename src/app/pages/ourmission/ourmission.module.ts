import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OurmissionComponent} from './ourmission.component';

import {OurMissionPageRoutingModule} from './ourmission-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, OurMissionPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [OurmissionComponent],
})
export class OurmissionPageModule {}
