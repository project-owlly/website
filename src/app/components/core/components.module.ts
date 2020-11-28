import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ButtonComponent} from './button/button.component';
import {SignatureComponent} from './signature/signature.component';
import {TitleComponent} from './title/title.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent, SignatureComponent, TitleComponent],
  exports: [HeaderComponent, FooterComponent, ButtonComponent, SignatureComponent, TitleComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
