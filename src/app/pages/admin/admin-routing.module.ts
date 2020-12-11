import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    //canActivate:
  },

  {
    path: 'certify',
    loadChildren: () => import('./certify-request/certify-request.module').then((m) => m.CertifyRequestModule),
    //canActivate:
  },

  {
    path: 'certify/:id',
    loadChildren: () => import('./certify-detail/certify-detail.module').then((m) => m.CertifyDetailModule),
    //canActivate:
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
