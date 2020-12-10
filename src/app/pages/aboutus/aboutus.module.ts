import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutusComponent} from './aboutus.component';

import {AboutusPageRoutingModule} from './aboutus-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [CommonModule, AboutusPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [AboutusComponent],
})
export class AboutusPageModule {}
