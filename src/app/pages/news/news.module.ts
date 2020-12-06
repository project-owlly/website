import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewsComponent} from './news.component';

import {NewsPageRoutingModule} from './news-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, NewsPageRoutingModule, ComponentsModule, FontAwesomeModule],
  declarations: [NewsComponent],
})
export class NewsPageModule {}
