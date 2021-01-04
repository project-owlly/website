import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {OwllyRoutingModule} from './owlly-routing.module';
import {OwllyComponent} from './owlly.component';
import {ComponentsModule} from 'src/app/components/core/components.module';
@NgModule({
  declarations: [OwllyComponent],
  imports: [CommonModule, OwllyRoutingModule, ScullyLibModule, ComponentsModule],
})
export class OwllyModule {}
