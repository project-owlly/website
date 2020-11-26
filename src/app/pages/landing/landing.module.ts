import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {LandingPageComponent} from './landing.page';

import {LandingPageRoutingModule} from './landing-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, LandingPageRoutingModule, ComponentsModule, ReactiveFormsModule],
  declarations: [LandingPageComponent],
})
export class LandingPageModule {}
