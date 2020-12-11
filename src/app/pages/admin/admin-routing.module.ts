import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
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

  // AUTH PAGES
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
    //canActivate:
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then((m) => m.LogoutModule),
    //canActivate:
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule),
    //canActivate:
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
    //canActivate:
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
