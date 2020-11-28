import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';

import {HomePageRoutingModule} from './home-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, HomePageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [HomeComponent],
})
export class HomePageModule {}
