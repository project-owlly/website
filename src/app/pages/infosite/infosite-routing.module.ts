import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {InfositeComponent} from './infosite.component';

const routes: Routes = [
  {
    path: '',
    component: InfositeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfositePageRoutingModule {}
