import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CitizenComponent} from './citizen.component';

import {CitizenPageRoutingModule} from './citizen-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, CitizenPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [CitizenComponent],
})
export class CitizenPageModule {}
