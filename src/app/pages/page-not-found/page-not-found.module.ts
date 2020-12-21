import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found.component';
import {PageNotFoundRoutingModule} from './page-not-found-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';
@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, ComponentsModule, PageNotFoundRoutingModule],
})
export class PageNotFoundModule {}
