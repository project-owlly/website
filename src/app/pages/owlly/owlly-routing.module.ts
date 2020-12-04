import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OwllyComponent} from './owlly.component';

const routes: Routes = [
  {
    path: ':slug',
    component: OwllyComponent,
  },
  {
    path: '**',
    component: OwllyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwllyRoutingModule {}
