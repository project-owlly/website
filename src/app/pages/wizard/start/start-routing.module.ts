import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StartComponent} from './start.component';

import {OwllyIdGuard} from '../../../guards/owlly-id.guard';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    canActivate: [OwllyIdGuard],
  },
  {
    path: ':owllyId',
    component: StartComponent,
    canActivate: [OwllyIdGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
