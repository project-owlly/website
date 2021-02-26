import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewsletterRoutingModule} from './newsletter-routing.module';
import {NewsletterComponent} from './newsletter.component';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [NewsletterComponent],
  imports: [CommonModule, NewsletterRoutingModule, ComponentsModule, FontAwesomeModule],
})
export class NewsletterModule {}
