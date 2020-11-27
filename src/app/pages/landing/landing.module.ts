import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingPageComponent} from './landing.page';

import {LandingPageRoutingModule} from './landing-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

@NgModule({
  imports: [CommonModule, LandingPageRoutingModule, ComponentsModule],
  declarations: [LandingPageComponent],
})
export class LandingPageModule {}
