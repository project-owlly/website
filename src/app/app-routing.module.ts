import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EidGuard} from './guards/eid.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'impressum',
    loadChildren: () => import('./pages/impressum/impressum.module').then((m) => m.ImpressumPageModule),
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/wizard/start/start.module').then((m) => m.StartPageModule),
  },
  {
    path: 'return',
    canActivate: [EidGuard],
    children: [],
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
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'infosite',
    loadChildren: () => import('./pages/infosite/infosite.module').then((m) => m.InfositePageModule),
  },
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
    path: 'solutions',
    loadChildren: () => import('./pages/solutions/solutions.module').then((m) => m.SolutionsPageModule),
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then((m) => m.CreatePageModule),
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then((m) => m.AboutusPageModule),
  },


  {path: 'o', loadChildren: () => import('./pages/owlly/owlly.module').then((m) => m.OwllyModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
