import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CertifyDetailComponent} from './certify-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CertifyDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertifyDetailRoutingModule {}
