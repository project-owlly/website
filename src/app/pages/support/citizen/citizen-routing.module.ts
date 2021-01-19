import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CitizenComponent} from './citizen.component';

const routes: Routes = [
  {
    path: '',
    component: CitizenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenPageRoutingModule {}
