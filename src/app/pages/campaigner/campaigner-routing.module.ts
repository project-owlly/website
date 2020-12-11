import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CampaignerComponent} from './campaigner.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignerPageRoutingModule {}
