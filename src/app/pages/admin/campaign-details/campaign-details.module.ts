import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CampaignDetailsRoutingModule} from './campaign-details-routing.module';
import {CampaignDetailsComponent} from './campaign-details.component';

@NgModule({
  declarations: [CampaignDetailsComponent],
  imports: [CommonModule, CampaignDetailsRoutingModule],
})
export class CampaignDetailsModule {}
