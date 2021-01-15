import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CertifyRequestComponent} from './certify-request.component';

const routes: Routes = [
  {
    path: '',
    component: CertifyRequestComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertifyRequestRoutingModule {}
