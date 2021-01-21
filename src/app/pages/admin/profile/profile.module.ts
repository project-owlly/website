import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {ComponentsModule} from 'src/app/components/core/components.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ProfileRoutingModule, ComponentsModule, FontAwesomeModule,],
})
export class ProfileModule {}
