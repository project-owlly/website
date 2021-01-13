import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CampaignDetailsComponent} from './campaign-details.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignDetailsRoutingModule {}
