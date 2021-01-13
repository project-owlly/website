import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CampaignsRoutingModule} from './campaigns-routing.module';
import {CampaignsComponent} from './campaigns.component';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [CampaignsComponent],
  imports: [CommonModule, CampaignsRoutingModule, ComponentsModule, FontAwesomeModule],
})
export class CampaignsModule {}
