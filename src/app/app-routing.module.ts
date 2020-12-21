import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EidGuard} from './guards/eid.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingPageModule),
  },
  //MICROPAGES
  {
    path: 'o',
    loadChildren: () => import('./pages/owlly/owlly.module').then((m) => m.OwllyModule),
  },
  {
    //TODO: delete this..
    path: 'infosite',
    loadChildren: () => import('./pages/infosite/infosite.module').then((m) => m.InfositePageModule),
  },

  //needs to be moved..
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then((m) => m.CreatePageModule),
  },

  // WIZARD START
  {
    //TODO: delete this..
    path: 'infosite',
    loadChildren: () => import('./pages/infosite/infosite.module').then((m) => m.InfositePageModule),
  },

  //needs to be moved..
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then((m) => m.CreatePageModule),
  },

  // WIZARD START
  {
    path: 'return',
    canActivate: [EidGuard],
    children: [],
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/wizard/start/start.module').then((m) => m.StartPageModule),
  },
  {
    path: 'pdf',
    loadChildren: () => import('./pages/wizard/pdf/pdf.module').then((m) => m.PdfPageModule),
  },
  {
    path: 'sign',
    loadChildren: () => import('./pages/wizard/sign/sign.module').then((m) => m.SignPageModule),
  },
  {
    path: 'finish',
    loadChildren: () => import('./pages/wizard/finish/finish.module').then((m) => m.FinishPageModule),
  },
  // WIZARD RETURN

  {
    path: 'impressum',
    loadChildren: () => import('./pages/impressum/impressum.module').then((m) => m.ImpressumPageModule),
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },

  //GENERAL PAGES
  {
    path: 'ourmission',
    loadChildren: () => import('./pages/ourmission/ourmission.module').then((m) => m.OurmissionPageModule),
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then((m) => m.SupportPageModule),
  },
  {
    path: 'support/administration',
    loadChildren: () => import('./pages/administration/administration.module').then((m) => m.AdministrationPageModule),
  },
  {
    path: 'support/campaigner',
    loadChildren: () => import('./pages/campaigner/campaigner.module').then((m) => m.CampaignerPageModule),
  },
  {
    path: 'support/citizen',
    loadChildren: () => import('./pages/citizen/citizen.module').then((m) => m.CitizenPageModule),
  },
  {
    path: 'explained',
    loadChildren: () => import('./pages/explained/explained.module').then((m) => m.ExplainedPageModule),
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then((m) => m.NewsPageModule),
  },
  {
    path: 'progress',
    loadChildren: () => import('./pages/progress/progress.module').then((m) => m.ProgressPageModule),
  },
  {
    path: 'progress/cantons/:canton',
    loadChildren: () => import('./pages/progress-cantons/progress-cantons.module').then((m) => m.ProgressCantonsPageModule),
  },
  {
    path: 'solutions',
    loadChildren: () => import('./pages/solutions/solutions.module').then((m) => m.SolutionsPageModule),
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then((m) => m.AboutusPageModule),
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then((m) => m.PolicyPageModule),
  },

  // AUTH PAGES
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
    //canActivate:
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then((m) => m.LogoutModule),
    //canActivate:
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then((m) => m.SignupModule),
    //canActivate:
  },

  {
    path: 'admin',
    redirectTo: '/admin/dashboard',
    pathMatch: 'full',
  },

  {
    path: 'admin',
    //loadChildren: () => import('./pages/signup/signup.module').then((m) => m.SignupModule),
    //canActivate:
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then((m) => m.DashboardModule),
        //canActivate:
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/admin/profile/profile.module').then((m) => m.ProfileModule),
        //canActivate:
      },

      // MUNICIPALITIES PAGES
      {
        path: 'certify-request',
        loadChildren: () => import('./pages/admin/certify-request/certify-request.module').then((m) => m.CertifyRequestModule),
        //canActivate:
      },
      {
        path: 'certify/:id',
        loadChildren: () => import('./pages/admin/certify-detail/certify-detail.module').then((m) => m.CertifyDetailModule),
        //canActivate:
      },

      // CAMPAINGER PAGES
      {
        path: 'campaign',
        loadChildren: () => import('./pages/admin/campaigns/campaigns.module').then((m) => m.CampaignsModule),
        //canActivate:
      },
      {
        path: 'campaign/:id',
        loadChildren: () => import('./pages/admin/campaign-details/campaign-details.module').then((m) => m.CampaignDetailsModule),
        //canActivate:
      },
    ],
  },

  //Fallback
  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
