import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        //canActivate:
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        //canActivate:
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
        //canActivate:
      },

      // MUNICIPALITIES PAGES
      {
        path: 'certify-request',
        loadChildren: () => import('./certify-request/certify-request.module').then((m) => m.CertifyRequestModule),
        //canActivate:
      },
      {
        path: 'certify/:id',
        loadChildren: () => import('./certify-detail/certify-detail.module').then((m) => m.CertifyDetailModule),
        //canActivate:
      },

      // CAMPAINGER PAGES
      {
        path: 'campaign',
        loadChildren: () => import('./campaigns/campaigns.module').then((m) => m.CampaignsModule),
        //canActivate:
      },
      {
        path: 'campaign/:id',
        loadChildren: () => import('./campaign-details/campaign-details.module').then((m) => m.CampaignDetailsModule),
        //canActivate:
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
