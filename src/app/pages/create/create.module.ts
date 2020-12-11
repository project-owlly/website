import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreateComponent} from './create.component';

import {CreatePageRoutingModule} from './create-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, CreatePageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [CreateComponent],
})
export class CreatePageModule {}
