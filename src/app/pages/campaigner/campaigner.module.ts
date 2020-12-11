import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CampaignerComponent} from './campaigner.component';

import {CampaignerPageRoutingModule} from './campaigner-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, CampaignerPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [CampaignerComponent],
})
export class CampaignerPageModule {}
