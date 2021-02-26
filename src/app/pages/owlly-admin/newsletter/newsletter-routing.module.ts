import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsletterComponent} from './newsletter.component';

const routes: Routes = [
  {
    path: '',
    component: NewsletterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsletterRoutingModule {}
