import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SolutionsComponent} from './solutions.component';

const routes: Routes = [
  {
    path: '',
    component: SolutionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionsPageRoutingModule {}
