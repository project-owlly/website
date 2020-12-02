import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OurmissionComponent} from './ourmission.component';

const routes: Routes = [
  {
    path: '',
    component: OurmissionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurMissionPageRoutingModule {}
