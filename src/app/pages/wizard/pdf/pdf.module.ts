import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {PdfPageRoutingModule} from './pdf-routing.module';

import {PdfComponent} from './pdf.component';
import {ComponentsModule} from '../../../components/core/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, PdfPageRoutingModule, ComponentsModule],
  declarations: [PdfComponent],
})
export class PdfPageModule {}
