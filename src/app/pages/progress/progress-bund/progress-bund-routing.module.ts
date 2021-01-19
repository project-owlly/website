import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProgressBundComponent} from './progress-bund.component';

const routes: Routes = [
  {
    path: '',
    component: ProgressBundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressBundPageRoutingModule {}
