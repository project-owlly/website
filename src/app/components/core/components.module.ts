import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ButtonComponent} from './button/button.component';
import {SignatureComponent} from './signature/signature.component';
import { TextblockComponent } from './textblock/textblock.component';
import { CardComponent } from './card/card.component';
import { PageheroComponent } from './pagehero/pagehero.component';
import { NewscardComponent } from './newscard/newscard.component';
import { SwissmapComponent } from './swissmap/swissmap.component';
import { NewsComponent } from './news/news.component';
import { DiamondComponent } from './diamond/diamond.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent, SignatureComponent, TextblockComponent, CardComponent, PageheroComponent, NewscardComponent, SwissmapComponent, NewsComponent, DiamondComponent],
  exports: [HeaderComponent, FooterComponent, ButtonComponent, SignatureComponent, TextblockComponent, CardComponent, PageheroComponent, NewscardComponent, SwissmapComponent, NewsComponent, DiamondComponent],
  imports: [FontAwesomeModule, CommonModule],
})
export class ComponentsModule {}
