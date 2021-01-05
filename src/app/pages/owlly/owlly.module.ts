import {CommonModule} from '@angular/common';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {OwllyRoutingModule} from './owlly-routing.module';
import {OwllyComponent} from './owlly.component';
import {ComponentsModule} from 'src/app/components/core/components.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [OwllyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, OwllyRoutingModule, ScullyLibModule, FontAwesomeModule, ComponentsModule],
})
export class OwllyModule {}
