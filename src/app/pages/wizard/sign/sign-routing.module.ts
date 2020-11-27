import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SignComponent} from './sign.component';

import {OwllyIdGuard} from '../../../guards/owlly-id.guard';

const routes: Routes = [
  {
    path: '',
    component: SignComponent,
    canActivate: [OwllyIdGuard],
  },
  {
    path: ':owllyId',
    component: SignComponent,
    canActivate: [OwllyIdGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignPageRoutingModule {}
