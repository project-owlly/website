import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PdfComponent} from './pdf.component';

const routes: Routes = [
  {
    path: '',
    component: PdfComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfPageRoutingModule {}
