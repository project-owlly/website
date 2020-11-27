import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {StartPageRoutingModule} from './start-routing.module';

import {StartComponent} from './start.component';
import {ComponentsModule} from '../../../components/core/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, StartPageRoutingModule, ComponentsModule],
  declarations: [StartComponent],
})
export class StartPageModule {}
