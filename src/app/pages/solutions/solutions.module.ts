import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SolutionsComponent} from './solutions.component';

import {SolutionsPageRoutingModule} from './solutions-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, SolutionsPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [SolutionsComponent],
})
export class SolutionsPageModule {}
