import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExplainedComponent} from './explained.component';

import {ExplainedPageRoutingModule} from './explained-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, ExplainedPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [ExplainedComponent],
})
export class ExplainedPageModule {}
