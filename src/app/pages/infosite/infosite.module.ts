import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InfositeComponent} from './infosite.component';

import {InfositePageRoutingModule} from './infosite-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

@NgModule({
  imports: [CommonModule, InfositePageRoutingModule, ComponentsModule],
  declarations: [InfositeComponent],
})
export class InfositePageModule {}
