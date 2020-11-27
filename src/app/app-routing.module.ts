import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'impressum',
    loadChildren: () => import('./pages/impressum/impressum.module').then((m) => m.ImpressumPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
