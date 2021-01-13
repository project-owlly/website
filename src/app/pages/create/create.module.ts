import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreateComponent} from './create.component';

import {CreatePageRoutingModule} from './create-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, CreatePageRoutingModule, ComponentsModule, FontAwesomeModule, ReactiveFormsModule],
  declarations: [CreateComponent],
})
export class CreatePageModule {}
