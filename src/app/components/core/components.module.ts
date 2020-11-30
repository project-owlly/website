import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ButtonComponent} from './button/button.component';
import {SignatureComponent} from './signature/signature.component';
import { TextblockComponent } from './textblock/textblock.component';
import { CardComponent } from './card/card.component';
import { PageheroComponent } from './pagehero/pagehero.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent, SignatureComponent, TextblockComponent, CardComponent, PageheroComponent],
  exports: [HeaderComponent, FooterComponent, ButtonComponent, SignatureComponent, TextblockComponent, CardComponent, PageheroComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
