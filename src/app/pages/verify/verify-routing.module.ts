import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VerifyComponent} from './verify.component';
const routes: Routes = [{path: '', component: VerifyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyRoutingModule {}
