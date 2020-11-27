import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingComponent} from './landing.component';

import {LandingPageRoutingModule} from './landing-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, LandingPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [LandingComponent],
})
export class LandingPageModule {}
