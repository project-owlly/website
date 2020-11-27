import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NewsletterComponent} from './newsletter.page';

import {ModalModule} from '../../components/modal/modal.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalModule],
  declarations: [NewsletterComponent],
})
export class NewsletterPageModule {}
