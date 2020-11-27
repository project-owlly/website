import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FinishComponent} from './finish.component';

import {OwllyIdGuard} from '../../../guards/owlly-id.guard';

const routes: Routes = [
  {
    path: '',
    component: FinishComponent,
    canActivate: [OwllyIdGuard],
  },
  {
    path: ':owllyId',
    component: FinishComponent,
    canActivate: [OwllyIdGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishPageRoutingModule {}
