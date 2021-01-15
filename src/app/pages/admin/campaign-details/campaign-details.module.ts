import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CampaignDetailsRoutingModule} from './campaign-details-routing.module';
import {CampaignDetailsComponent} from './campaign-details.component';

import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CampaignDetailsComponent],
  imports: [CommonModule, CampaignDetailsRoutingModule, ComponentsModule, FontAwesomeModule],
})
export class CampaignDetailsModule {}
