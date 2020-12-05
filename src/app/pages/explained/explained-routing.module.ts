import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ExplainedComponent} from './explained.component';

const routes: Routes = [
  {
    path: '',
    component: ExplainedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplainedPageRoutingModule {}
