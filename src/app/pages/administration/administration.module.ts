import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdministrationComponent} from './administration.component';

import {AdministrationPageRoutingModule} from './administration-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, AdministrationPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [AdministrationComponent],
})
export class AdministrationPageModule {}
