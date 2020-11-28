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
    loadChildren: () => import('./certify/certify.module').then((m) => m.CertifyModule),
    //canActivate:
  },

  {
    path: 'certify/:id',
    loadChildren: () => import('./certify-detail/certify-detail.module').then((m) => m.CertifyDetailModule),
    //canActivate:
  },

  {
    path: 'owlly',
    loadChildren: () => import('./owlly/owlly.module').then((m) => m.OwllyModule),
    //canActivate:
  },

  {
    path: 'owlly/:id',
    loadChildren: () => import('./owlly-detail/owlly-detail.module').then((m) => m.OwllyDetailModule),
    //canActivate:
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
