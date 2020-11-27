import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ButtonComponent} from './button/button.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent],
  exports: [HeaderComponent, FooterComponent, ButtonComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
