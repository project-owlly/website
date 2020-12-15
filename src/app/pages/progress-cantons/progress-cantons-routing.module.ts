import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProgressCantonsComponent} from './progress-cantons.component';

const routes: Routes = [
  {
    path: '',
    component: ProgressCantonsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressCantonsPageRoutingModule {}
